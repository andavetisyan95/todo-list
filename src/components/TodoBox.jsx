import React, { useState } from "react";
//styles
import "../styles/TodoInput.scss";

export default function TodoBox({ todo, removeTodo, onChange }) {
  return (
    <label className="main_todos_comp_label">
      <input
        type="checkbox"
        className="main_todos_comp_label_inp"
        checked={todo.completed}
        onChange={(e) =>
          onChange({
            ...todo,
            completed: e.target.checked,
          })
        }
      />
      <div className="main_todos_comp_label_div">{todo.text}</div>

      <div className="main_todos_comp_label_btn">
        <button onClick={() => removeTodo(todo.id)}>Delete</button>
      </div>
    </label>
  );
}
