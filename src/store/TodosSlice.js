// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "./store";
// import { AppThunk } from "./store";
// import { useFirebase, isLoaded, isEmpty } from "react-redux-firebase";

// interface Todo {
//   id: string;
//   text: string;
//   completed: boolean;
// }

// interface TodosState {
//   todos: Todo[];
// }

// const initialState: TodosState = {
//   todos: [],
// };

// const todosSlice = createSlice({
//   name: "todos",
//   initialState,
//   reducers: {
//     addTodo: (state, action: PayloadAction<Todo>) => {
//       state.todos.push(action.payload);
//     },
//     toggleTodo: (state, action: PayloadAction<string>) => {
//       const todo = state.todos.find((todo) => todo.id === action.payload);
//       if (todo) {
//         todo.completed = !todo.completed;
//       }
//     },
//     deleteTodo: (state, action: PayloadAction<string>) => {
//       state.todos = state.todos.filter((todo) => todo.id !== action.payload);
//     },
//   },
// });

// export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;

// export const selectTodos = (state: RootState) => state.todos.todos;

// export default todosSlice.reducer;

// export const addTodoWithFirebase =
//   (todo: Todo): AppThunk =>
//   async (dispatch, getState) => {
//     const firebase = useFirebase();
//     const todosRef = firebase.ref("todos");
//     await todosRef.push(todo);
//     dispatch(addTodo(todo));
//   };

// export const deleteTodoWithFirebase =
//   (id: string): AppThunk =>
//   async (dispatch, getState) => {
//     const firebase = useFirebase();
//     const todoRef = firebase.ref(`todos/${id}`);
//     await todoRef.remove();
//     dispatch(deleteTodo(id));
//   };

// export const toggleTodoWithFirebase =
//   (id: string): AppThunk =>
//   async (dispatch, getState) => {
//     const firebase = useFirebase();
//     const todoRef = firebase.ref(`todos/${id}`);
//     const snapshot = await todoRef.once("value");
//     const todo = snapshot.val();
//     if (todo) {
//       await todoRef.update({ completed: !todo.completed });
//       dispatch(toggleTodo(id));
//     }
//   };
