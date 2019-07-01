const todoReducer = (state, action) => {
  console.log("reducer is running ===> ", action.type);
  switch (action.type) {
    case "MODIFY_APP":
      return (state = [...state, action.payload]);
    default:
      return state;
  }
};

module.exports = todoReducer;
