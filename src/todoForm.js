import React, { useContext, useState } from "react";
import "./css/App.css";
import { NewTodoContext } from "./createNewContext/newContext";

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

  const appContext = useContext(NewTodoContext);
  console.log("appContext2 ===> ", appContext);
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
