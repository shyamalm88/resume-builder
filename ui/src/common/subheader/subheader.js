import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./subheader.css";

const SubHeader = () => {
  return (
    <React.Fragment>
      <nav className=" border-bottom">
        <div className="container">
          <div className="row">
            <div className="col p-0 text-center">
              <NavLink className="no-link" to="/">
                <div className="step text-uppercase py-2">
                  <span> 1 </span>
                  Heading
                </div>
              </NavLink>
            </div>
            <div className="col p-0 text-center">
              <NavLink className="no-link" to="/work-history">
                <div className="step  text-uppercase py-2">
                  <span> 2 </span>
                  Work History
                </div>
              </NavLink>
            </div>
            <div className="col p-0 text-center">
              <NavLink className="no-link" to="/theoretical">
                <div className="step  text-uppercase py-2">
                  <span> 3 </span>
                  Theoretical
                </div>
              </NavLink>
            </div>
            <div className="col p-0 text-center">
              <NavLink className="no-link" to="/abilities">
                <div className="step  text-uppercase py-2">
                  <span> 4 </span>
                  Abilities
                </div>
              </NavLink>
            </div>
            <div className="col p-0 text-center">
              <NavLink className="no-link" to="/recognition">
                <div className="step  text-uppercase py-2">
                  <span> 5 </span>
                  Recognition
                </div>
              </NavLink>
            </div>
            <div className="col p-0 text-center">
              <NavLink className="no-link" to="/personality">
                <div className="step  text-uppercase py-2">
                  <span> 5 </span>
                  Personality
                </div>
              </NavLink>
            </div>
            <div className="col p-0 text-center">
              <NavLink className="no-link" to="/summary">
                <div className="step  text-uppercase py-2">
                  <span> 5 </span>
                  Summary
                </div>
              </NavLink>
            </div>
            <div className="col p-0 text-center">
              <NavLink className="no-link" to="/finalize">
                <div className="step  text-uppercase py-2">
                  <span> 6 </span>
                  Finalize
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SubHeader;
