import authActions from "../actions/auth";
  
  const authReducer = (state = 0, action) => {
      switch (action.type) {
  
          case authActions.LOGIN_SUCCESS:
            return {
                state: 1
              }

          case authActions.LOGOUT_SUCCESS:
              return {
                state: 0
              }

          default:
              return state;
          }
      }
  
  export default authReducer;