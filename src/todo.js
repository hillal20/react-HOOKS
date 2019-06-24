import React, { useContext, useState } from "react";
import "./css/App.css";

function Todo(props) {
  const { todo, index, makeCompleted, deleteTodo } = props;

  const completeHandler = e => {
    makeCompleted(index);
  };
  const deleteHandler = index => {
    deleteTodo(index);
  };
  return (
    <div className="todo">
      <h3>To Do </h3>
      <div style={{ textDecoration: todo.completed ? "line-through" : "" }}>
        {" "}
        {todo.text}
        <button onClick={completeHandler}>mark completed</button>
      </div>
      <button onClick={deleteHandler}> Delete </button>
      <div> {todo.completed.toString()}</div>
    </div>
  );
}

export default Todo;
