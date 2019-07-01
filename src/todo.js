import React, { useContext } from "react";
import "./css/App.css";
import { NewTodoContext } from "./createNewContext/newContext";
function Todo(props) {
  const { todo, index, makeCompleted, deleteTodo } = props;

  const completeHandler = e => {
    makeCompleted(index);
  };
  const deleteHandler = index => {
    deleteTodo(index);
  };
  const appContext = useContext(NewTodoContext);

  const updatingApp = e => {
    const newState = appContext.toDosState;
    newState.push({ text: "hilal aissani", completed: false });
    appContext.dispatch({ type: "MODIFY_APP", payload: newState });
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
      <button onClick={updatingApp}>Update The State </button>
    </div>
  );
}

export default Todo;
