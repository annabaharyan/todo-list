import React, { useState } from "react";
import "./todoForm.css";
const TodoForm = ({ add }) => {
  const [text, setText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (text.length > 0) {
          add(text);
        }

        setText("");
      }}
    >
      <input
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        id="addInput"
      />
      <button className="addBtn">Add</button>
    </form>
  );
};

export default TodoForm;
