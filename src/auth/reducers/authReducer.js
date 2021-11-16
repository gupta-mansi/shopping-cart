const authReducer = (state = false, action) => {
    switch (action.type) {
      case "LOGGED_IN":
        console.log(action.payload);
        return action.payload;
      default:
        return state;
    }
  };
  
  export default authReducer;
  