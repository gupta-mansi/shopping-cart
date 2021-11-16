export const auth = isLoggedIn => {
    return {
      type: "LOGGED_IN",
      payload: isLoggedIn
    };
  };