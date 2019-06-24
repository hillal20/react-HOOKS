const initialState = [];

const todoReducer = (state = initialState, action) => {
  console.log("reducer is running ......");
  switch (action.type) {
    case "MODIFY_APP":
      return (state = [...state, action.payload]);
    default:
      return state;
  }
};

module.exports = todoReducer;
