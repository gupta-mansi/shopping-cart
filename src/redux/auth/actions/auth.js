const authActions = {
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",

  LoginSuccess: () => ({
      type: authActions.LOGIN_SUCCESS,
  }),

  LogoutSuccess: () => ({
    type: authActions.LOGOUT_SUCCESS
  })

};

export default authActions;