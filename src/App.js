import React, { useState, useReducer } from "react";
import "./css/App.css";
import Todo from "./todo.js";
import Form from "./todoForm.js";
import UsingContext from "./usingContext/todo.js";
import UsingContextHttp from "./usingContext/todoUsingHttpHook";
import { NewTodoContext } from "./createNewContext/newContext.js";
import todoReducer from "./reducer/reducer.js";

function App() {
  const [toDosState, updateState] = useState([
    {
      text: "learn about react",
      completed: false
    },
    {
      text: " meet friend for lunch",
      completed: false
    },
    {
      text: " build really cool todo",
      completed: false
    }
  ]);

  const [playerState, updatePlayer] = useState({
    player: "renaldo",
    age: "20"
  });

  const addTodoFun = x => {
    const newTodo = [...toDosState, { text: x, completed: false }];
    updateState(newTodo);
  };
  const makeCompleted = index => {
    const newTodo = [...toDosState];
    newTodo[index].completed = true;
    updateState(newTodo);
  };
  const deleteTodo = index => {
    const newTodo = [...toDosState];
    newTodo.splice(index, 1);
    updateState(newTodo);
  };
  const [stateReducer, dispatch] = useReducer(todoReducer, toDosState);

  return (
    <NewTodoContext.Provider
      value={{
        toDosState,
        updateState,
        dispatch,
        stateReducer,
        playerState,
        updatePlayer
      }}
    >
      <div className="App">
        <div className="todo-list">
          <h3>To Do List </h3>
          {toDosState.map((el, i) => {
            return (
              <Todo
                key={i}
                todo={el}
                index={i}
                makeCompleted={makeCompleted}
                deleteTodo={deleteTodo}
              />
            );
          })}
        </div>
        <Form addTodoFun={addTodoFun} />
        <UsingContext something="aissani" />
        <UsingContextHttp something="balala" />
      </div>
    </NewTodoContext.Provider>
  );
}

export default App;
