import React from "react";

type TodoItemProps = {
  text: string;
  completed: boolean;
  onToggle: () => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ text, completed, onToggle }) => {
    return (
        <div>
            <input type="checkbox" checked={completed} onChange={onToggle} />
            
        </div>
    )
}

export default TodoItem;