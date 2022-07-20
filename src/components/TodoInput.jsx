import React, { useState } from "react";
//styles
import "../styles/TodoInput.scss";
//components
import TodoBox from "./TodoBox";
import Completeds from "./Completeds";

export default function TodoInput() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addToDo = (actions) => {
    if (actions !== "") {
      const newTodo = {
        id: Math.random(),
        text: actions,
        completed: false,
      };
      setTodoList([...todoList, newTodo]);
    } else {
      alert("Your input is empty!");
    }

    setTodo("");
  };

  const removeTodo = (id) => {
    setTodoList([...todoList.filter((todo) => todo.id !== id)]);
  };

  const handleCheck = (newTodo) => {
    return setTodoList(
      todoList.map((elem) => {
        if (elem.id === newTodo.id) {
          return newTodo;
        }
        return elem;
      })
    );
  };
  const editInputValue = (newValue) => {
    return setTodoList(
      todoList.map((elem) => {
        if (elem.id === newValue.id) {
          return newValue;
        }
        return elem;
      })
    );
  };
  return (
    <div className="main">
      <div className="main_div">
        <input
          onChange={(e) =>
            e.target.value.length >= 35
              ? alert(
                  "Your text size is more than 30 characters. Please shorten your text!"
                )
              : setTodo(e.target.value)
          }
          className="main_div_input"
          type="text"
          placeholder="What you have to done?"
          value={todo}
        />
        <button onClick={() => addToDo(todo)} className="main_div_btn">
          Add
        </button>
      </div>
      <div className="main_todos">
        <div className="main_todos_comp">
          {todoList.map((todo) => {
            return (
              <TodoBox
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                handleCheck={handleCheck}
                editInputValue={editInputValue}
              />
            );
          })}
          <Completeds todoList={todoList} />
        </div>
      </div>
    </div>
  );
}
