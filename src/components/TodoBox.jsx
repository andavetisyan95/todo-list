import React, { useState } from "react";
//styles
import "../styles/TodoInput.scss";

export default function TodoBox({
  todo,
  removeTodo,
  handleCheck,
  editInputValue,
}) {
  const [inputEditMode, setInputEditMode] = useState(false);
  const handleChange = () => {
    setInputEditMode(!inputEditMode);
  };
  const handleAccept = () => {
    if (todo.text.length < 35) {
      setInputEditMode(!inputEditMode);
    } else {
      alert("Please shorten your text!");
    }
  };
  return (
    <label className="main_todos_comp_label">
      <input
        type="checkbox"
        className="main_todos_comp_label_inp"
        checked={todo.completed}
        onChange={(e) =>
          handleCheck({
            ...todo,
            completed: e.target.checked,
          })
        }
      />
      {inputEditMode ? (
        <input
          type="text"
          className="main_todos_comp_label_input"
          value={todo.text}
          onChange={(e) => {
            editInputValue({
              ...todo,
              text: e.target.value,
            });
          }}
        />
      ) : (
        <p className="main_todos_comp_label_pTag">{todo.text}</p>
      )}

      <div className="main_todos_comp_label_btn">
        <button onClick={handleChange}>Edit</button>
        <button onClick={handleAccept}>Accept</button>
        <button onClick={() => removeTodo(todo.id)}>Delete</button>
      </div>
    </label>
  );
}
