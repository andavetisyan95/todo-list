import React from "react";
//styles
import "../styles/TodoInput.scss";

export default function Completeds({ todoList }) {
  const completed = todoList.filter((todo) => todo.completed).length;
  return (
    <div className="main_todos_comp_done">
      {completed}/{todoList.length} completed
    </div>
  );
}
