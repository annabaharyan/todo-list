import React from "react";
import "./todoFooter.css"
export default function TodoFooter({ todos, clearCompleted }) {
  let completed;
  if (todos) {
    completed = todos.filter((todo) => todo.completed);
  }

  return (
    <div className="footer-container">
      {todos && (
        <>
          <span>
            {completed.length}/{todos.length} is completed
          </span>
          <button onClick={clearCompleted}>Clear Completed</button>
        </>
      )}
    </div>
  );
}
