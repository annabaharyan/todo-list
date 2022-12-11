import React from "react";

export default function TodoItem({ todo, changeStatus, deleteItem }) {
  return (
    <label id="todo-item">
      <input
        type="checkbox"
        
        checked={todo.completed}
        onChange={(e) =>
          changeStatus({
            ...todo,
            completed: e.target.checked,
          })
        }
      />
      <p>{todo.title}</p>
      <button onClick={()=>deleteItem(todo.id)}>X</button>
    </label>
  );
}
