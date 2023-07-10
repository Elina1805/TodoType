// // import { styled } from "@mui/styled"/
// import React, { useState } from "react";
// import TodoItem from "./TodoItem";
// import styled from "@emotion/styled";

// type Todo = {
//   id: number;
//   text: string;
//   completed: boolean;
// };

// const TodoList: React.FC = () => {
//   const [todos, setTodos] = useState<Todo[]>([]);
//   const [inputValue, setInputValue] = useState("");

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setInputValue(event.target.value);
//   };

//   const handleAddTodo = () => {
//     if (inputValue.trim() !== "") {
//       const newTodo: Todo = {
//         id: Date.now(),
//         text: inputValue,
//         completed: false,
//       };

//       setTodos([...todos, newTodo]);
//       setInputValue("");
//     }
//   };

//   const handleToggleTodo = (id: number) => {
//     setTodos((prevTodos) =>
//       prevTodos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   const handleDeleteTodo = (id: number) => {
//     setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <Container>
//       <h1>Todo List</h1>
//       <input type="text" value={inputValue} onChange={handleInputChange} />
//       <button onClick={handleAddTodo}>Add Todo</button>
//       {todos.map((todo) => (
//         <TodoItem
//           key={todo.id}
//           text={todo.text}
//           completed={todo.completed}
//           onToggle={() => handleToggleTodo(todo.id)}
//         />
//       ))}
//       {todos.length === 0 && <p>No todos yet.</p>}
//       <button onClick={() => setTodos([])}>Clear All</button>
//     </Container>
//   );
// };

// export default TodoList;

// const Container = styled("div")({
//   textAlign: "center",
//   marginTop: "50px",
//   textDecoration: "none",
// });
import React, { useState } from "react";

type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoList: React.FC = () => {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      const newItem: TodoItem = {
        id: Date.now(),
        text: newTodo,
        completed: false,
      };

      setTodoItems((prevItems) => [...prevItems, newItem]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (id: number) => {
    setTodoItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleCompleteTodo = (id: number) => {
    setTodoItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEditTodo = (id: number, newText: string) => {
    setTodoItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, text: newText };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <h1>Todo List</h1>

      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      <ul>
        {todoItems.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleCompleteTodo(item.id)}
            />
            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {item.text}
            </span>
            <button onClick={() => handleDeleteTodo(item.id)}>Delete</button>
            <button
              onClick={() => {
                const newText = prompt("Edit todo", item.text);
                if (newText) {
                  handleEditTodo(item.id, newText);
                }
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
