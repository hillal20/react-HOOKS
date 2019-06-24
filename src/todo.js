import React, { useContext, useState } from "react";
import "./css/App.css";

function Todo(props) {
  const { todo, index, makeCompleted } = props;

  const completeHandler = e => {
    makeCompleted(index);
  };
  return (
    <div className="todo">
      <h3>To Do </h3>
      <div style={{ textDecoration: todo.completed ? "line-through" : "" }}>
        {" "}
        {todo.text}
        <button onClick={completeHandler}>mark completed</button>
      </div>
      <div> {todo.completed.toString()}</div>
    </div>
  );
}

export default Todo;
