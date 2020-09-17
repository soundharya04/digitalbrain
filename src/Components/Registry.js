import React, { useState } from "react";
import Register from "../Containers/Register";
import Login from "../Containers/Login";

const Registry = () => {
  const [ToggleRegister, setToggleRegister] = useState(true);

  const RegistryToggle = () => {
    setToggleRegister(!ToggleRegister);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-6 d-none d-md-block image-container"></div>
        <div className="col-lg-6 col-md-6 form-container">
          <div className="col-lg-8 col-md-12 col-sm-9 col-xs-12 form-box text-center">
            {!ToggleRegister ? (
              <Register toggle={RegistryToggle} />
            ) : (
              <Login toggle={RegistryToggle} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registry;
