import React, { useState, useRef } from "react";
import "./css/App.css";

function Form(props) {
  const { addTodoFun } = props;
  const [formState, updateState] = useState("");
  const submitHandler = () => {
    if (formState === "") {
      return alert("can not be empty");
    }
    addTodoFun(formState);

    updateState("");
  };
  const updateStateHandler = e => {
    updateState(e.target.value);
    inputRef.current.focus();
  };
  const inputRef = useRef(null);
  return (
    <div className="form">
      <h3>Form </h3>
      <input
        placeholder="add Text "
        name="addText"
        value={formState}
        onChange={updateStateHandler}
        ref={inputRef}
      />

      <button onClick={submitHandler}> Submit</button>
    </div>
  );
}

export default Form;
