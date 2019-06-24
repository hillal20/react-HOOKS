import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const Todo2 = props => {
  const [loadedTodo, setLoadedTodo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchingData = () => {
    setIsLoading(true);
    const promise = axios.get("http://localhost:4000/data");
    promise
      .then(res => {
        setIsLoading(false);

        const newState = [...res.data.msg];
        setLoadedTodo(newState);
      })
      .catch(err => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchingData();
    return () => {
      console.log("cleaning up ...");
    };
  }, [props.something]); //  will be called if the props.something changes

  return (
    <div className="todo">
      <h3>using getContext </h3>
      {isLoading && (
        <div>
          <h3>data is loading ....</h3>
        </div>
      )}
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

export default React.memo(Todo2);
