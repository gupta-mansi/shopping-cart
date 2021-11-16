import authActions from "../actions/auth";
  
  const authReducer = (state = false, action) => {
      switch (action.type) {
  
          case authActions.LOGIN_SUCCESS:
              console.log('login_success',state);
              return {state: true}

          case authActions.LOGOUT_SUCCESS:
              console.log('logout_success', state);
              return {
                state: false
              }

          default:
              return state;
          }
      }
  
  export default authReducer;