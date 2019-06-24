import React, { useContext, useState } from "react";
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
  };

  return (
    <div className="form">
      <h3>Form </h3>
      <input
        placeholder="add Text "
        name="addText"
        value={formState}
        onChange={updateStateHandler}
      />

      <button onClick={submitHandler}> Submit</button>
    </div>
  );
}

export default Form;
