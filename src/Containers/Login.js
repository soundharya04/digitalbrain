import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { auth } from "../Actions/authAction";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  let history = useHistory();
  useEffect(
    () => {
      if (props.user) {
        history.push("/dashboard");
      }
    },
    [props.user],
    [props.error]
  );

  const [state, setState] = useState({
    emailid: "",
    password: "",
  });
  const [err, setErr] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    props.auth(state.emailid, state.password, false);
  };
  return (
    <React.Fragment>
      <div className="heading mb-4">
        <h2>Login to your account </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-input ">
          <span>
            <i className="fa fa-user"></i>
          </span>
          <input
            type="text"
            placeholder="UserName"
            required
            onChange={(e) => {
              const data = e.target.value;
              setState({
                ...state,
                emailid: data,
              });
            }}
          />
        </div>
        <div className="form-input mt-3">
          <span>
            <i className="fa fa-lock"></i>
          </span>
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => {
              const data = e.target.value;
              setState({
                ...state,
                password: data,
              });
            }}
          />
        </div>

        <div className="text-center my-3">
          <button type="submit" className="btn">
            Login
          </button>
          {props.error ? (
            <div className="invalid">
              <i className="fa fa-exclamation-circle"></i>
              Username/Password is incorrect
            </div>
          ) : null}
        </div>

        <div style={{ color: "#777" }}>
          New User{"     "}
          <span
            className="btn-link login-link"
            onClick={(e) => {
              e.preventDefault();
              props.toggle();
            }}
          >
            Register here
          </span>
        </div>
      </form>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state ? state.userId : null,
    error: state ? state.error : null,
  };
};
export default connect(mapStateToProps, { auth })(Login);
