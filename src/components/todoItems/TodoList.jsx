import React from "react";
import TodoItem from "./TodoItem";
import "./todoItem.css";
export default function TodoList({ todos, deleteItem, changeStatus }) {
  return (
    <div style={{ padding: "20px 0" }}>
      {todos &&
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            changeStatus={changeStatus}
            deleteItem={deleteItem}
          />
        ))}
    </div>
  );
}
