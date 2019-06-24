import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const Todo2 = props => {
  const [loadedTodo, setLoadedTodo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // setIsLoading(true);
    const promise = axios.get("http://localhost:4000/data");
    promise
      .then(res => {
        setIsLoading(false);
        console.log("res ==>", res.data.msg);
        const newState = [...res.data.msg];
        setLoadedTodo(newState);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log("loadedTodo  ===> ", loadedTodo);
  return (
    <div className="todo">
      <h3>using getContext </h3>
      {loadedTodo.map((el, i) => {
        return (
          <div key={i}>
            <div>{el.text}</div>
            <div>{el.completed.toString()}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Todo2;
