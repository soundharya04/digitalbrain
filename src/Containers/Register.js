import React, { useState } from "react";
import { connect } from "react-redux";
import { auth } from "../Actions/authAction";
import { useHistory } from "react-router-dom";

const Register = (props) => {
  let history = useHistory();
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    terms: false,
  });
  const [err, setErr] = useState({
    username: "",
    email: "",
    password: "",
    terms: "Please accept the terms and conditions",
  });
  const [valid, setValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    let count = 0;
    Object.values(err).forEach((val) => val.length > 0 && (count = count + 1));
    console.log(err, count);
    if (
      err.username.length === 0 &&
      err.email.length === 0 &&
      err.password.length === 0
    ) {
      if (!state.terms) alert(err.terms);
    }
    if (count > 0) {
      setValid(false);
    } else {
      history.push("/dashboard");
      props.auth(state.email, state.password, true);
    }
  };

  return (
    <React.Fragment>
      <div className="heading mb-4">
        <h2>Create your account </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <span>
            <i className="fa fa-user"></i>
          </span>
          <input
            type="text"
            placeholder="User Name"
            value={state.username}
            required
            onChange={(e) => {
              const data = e.target.value;
              if (
                data.trim().length < 8 ||
                data.trim().length > 16 ||
                data.trim().length === 0
              ) {
                setErr({
                  ...err,
                  username: "Please enter a valid username",
                });
              } else {
                setErr({
                  ...err,
                  username: "",
                });
              }
              setState({ ...state, username: data });
            }}
          />
        </div>
        {!valid ? (
          <div className="invalid">
            {err.username.length > 0 ? (
              <i className="fa fa-exclamation-circle"></i>
            ) : null}
            {"  "}
            {err.username}
          </div>
        ) : null}

        <div className="form-input mt-3">
          <span>
            <i className="fa fa-envelope"></i>
          </span>
          <input
            type="text"
            placeholder="Email Address"
            value={state.email}
            required
            onChange={(e) => {
              const data = e.target.value;
              const EmailRegex = RegExp(/\S+@\S+\.\S+/);
              console.log(EmailRegex.test(data));
              if (!EmailRegex.test(data)) {
                setErr({ ...err, email: "Please enter a valid email address" });
              } else {
                setErr({ ...err, email: "" });
              }
              setState({ ...state, email: data });
            }}
          />
        </div>
        {!valid ? (
          <div className="invalid">
            {err.email.length > 0 ? (
              <i className="fa fa-exclamation-circle"></i>
            ) : null}
            {"  "}
            {err.email}
          </div>
        ) : null}
        <div className="form-input mt-3">
          <span>
            <i className="fa fa-lock"></i>
          </span>
          <input
            type="password"
            placeholder="Password"
            value={state.password}
            required
            onChange={(e) => {
              const data = e.target.value;
              if (
                data.trim().length < 8 ||
                data.trim().length > 16 ||
                data.trim().length === 0
              ) {
                setErr({
                  ...err,
                  password: "Please enter a valid password",
                });
              } else {
                setErr({
                  ...err,
                  password: "",
                });
              }
              setState({ ...state, password: data });
            }}
          />
          <small id="passHelp" className="form-text text-muted">
            Your password must be 8-16 characters long.
          </small>
        </div>
        {!valid ? (
          <div className="invalid">
            {err.password.length > 0 ? (
              <i className="fa fa-exclamation-circle"></i>
            ) : null}
            {"  "}
            {err.password}
          </div>
        ) : null}
        <div className="row my-3">
          <div className="col-12 d-flex">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="cb1"
                onChange={() => {
                  if (state.terms) {
                    setErr({
                      ...err,
                      terms: "Please accept the terms and conditions.",
                    });
                  } else {
                    setErr({
                      ...err,
                      terms: "",
                    });
                  }
                  setState({
                    ...state,
                    terms: !state.terms,
                  });
                }}
              />
              <label className="custom-control-label " htmlFor="cb1">
                I agree all terms & conditions
              </label>
            </div>
          </div>
        </div>
        <div className="text-center mb-3">
          <button type="submit" className="btn">
            Register
          </button>
        </div>

        <div style={{ color: "#777" }}>
          Already have an account{"   "}
          <span
            className="btn-link login-link"
            onClick={(e) => {
              e.preventDefault();
              props.toggle();
            }}
          >
            Login here
          </span>
        </div>
      </form>
    </React.Fragment>
  );
};

export default connect(null, { auth })(Register);
