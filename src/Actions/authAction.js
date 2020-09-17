import axios from "axios";

export const auth = (email, password, isSignup) => (dispatch) => {
  const authData = {
    email: email,
    password: password,
    returnSecureToken: true,
  };

  let url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCEEhqfd5X4Hr0tQ4sKIsDRB0AQcKikUhw";
  if (!isSignup) {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCEEhqfd5X4Hr0tQ4sKIsDRB0AQcKikUhw";
  }
  axios
    .post(url, authData)
    .then((res) => {
      dispatch({
        type: "AUTH_SUCCESS",
        cred: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: "AUTH_FAIL",
        err: err,
      });
    });
};
