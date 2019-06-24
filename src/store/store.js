import React, { createContext, useReducer } from "react";
import reducer from "../reducer/reducer";
const Context = createContext({});
export { Context };

const store = props => {
  return <Context.Provider>{props.children}</Context.Provider>;
};

export default store;
