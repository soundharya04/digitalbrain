import React from "react";
import { useHistory } from "react-router-dom";

const Landing = (props) => {
  let history = useHistory();
  return (
    <header className="home">
      <h1
        className="herotext text-white"
        style={{
          fontSize: "50px",
        }}
      >
        DigitalBrain
      </h1>
      <span
        className="herotext text-white"
        style={{
          fontSize: "30px",
        }}
      >
        No forgetting. No regretting.{" "}
      </span>
      <br />
      <button
        className="btn herobutton"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          history.push("/registry");
        }}
      >
        Get started ->
      </button>
    </header>
  );
};

export default Landing;
