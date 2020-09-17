const initState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
};

const AuthReducer = (state = initState, actions) => {
  switch (actions.type) {
    case "AUTH_SUCCESS":
      return {
        token: actions.cred.idToken,
        userId: actions.cred.email,
        error: false,
        loading: false,
      };

    case "AUTH_FAIL":
      return {
        error: actions.err,
        loading: false,
      };

    default:
      return null;
  }
};

export default AuthReducer;
