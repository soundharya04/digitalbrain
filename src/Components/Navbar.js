import React from "react";
import logo from "../resources/DigiBrain.jpg";

const Navbar = (props) => {
  return (
    <nav className=" .sb-topnav navbar navbar-expand text-white nav-color sticky-top ">
      <a className=" nav-link text-white " id="sidebarToggle" href="#">
        <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
      </a>
      <a className="navbar-brand ml-4" href="#">
        <img className="logo" src={logo} alt=""></img>
      </a>
      <a className="navbar-brand text-white " href="#">
        <h2>DigitalBrain</h2>
      </a>
      <ul className="navbar-nav ml-auto ">
        <li className="nav-item mx-3 text-light mt-2">
          <i className="fa fa-search fa-lg" aria-hidden="true"></i>
        </li>
        <li className="nav-item dropdown mr-4 text-white">
          <a
            className="nav-link dropdown-toggle custom-dropdown"
            id="userDropdown"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fa fa-cog fa-lg text-white" aria-hidden="true"></i>
          </a>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="userDropdown"
          >
            <a className="dropdown-item" href="#">
              Settings
            </a>
            <a className="dropdown-item" href="#">
              Activity Log
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="/logout">
              Logout
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
