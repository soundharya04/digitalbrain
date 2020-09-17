import React from "react";

const Logout = () => {
  return (
    <div className="container">
      <div className="logout-form">
        <h5>
          You are successfully logged out.
          <br /> Please{" "}
          <a className="link-dec" href="/registry">
            Login{" "}
          </a>{" "}
          to continue.
        </h5>
      </div>
    </div>
  );
};

export default Logout;
