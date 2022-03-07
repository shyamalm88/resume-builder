import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/cherry.png";
import Auth from "./authentication";

const Header = () => {
  return (
    <nav className="py-2 bg-light border-bottom">
      <div className="container-fluid d-flex flex-wrap">
        <ul className="nav me-auto">
          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-link link-dark px-2 active"
              aria-current="page"
            >
              <img src={Logo} alt="logo" width={"30px"} /> ResumeBuilder
            </NavLink>
          </li>
        </ul>
        <ul className="nav">
          <li className="nav-item">
            <Auth />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
