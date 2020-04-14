import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const styleNavbar = {
    fontFamily: "Bungee"
  };

  return (
    <>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper blue-grey darken-4">
            <a
              href="/#"
              data-target="slide-out"
              className="sidenav-trigger show-on-large"
            >
              <i className="material-icons">menu</i>
            </a>
            <NavLink
              to="/"
              className="brand-logo center active"
              style={styleNavbar}
            >
              CPTracker
            </NavLink>
            <ul id="nav-mobile" className="right">
              <li>
                <NavLink to="/about" style={styleNavbar}>
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <ul id="slide-out" className="sidenav sidenav-close">
        <li>
          <div className="user-view">
            <div className="background">
              <img src="../../img/hack.jpg" alt="coder" />
            </div>

            <img className="circle" src="../../img/dali.png" alt="coder" />

            <a href="/#">
              <span className="white-text name">Coder</span>
            </a>
            <a href="#email">
              <span className="white-text email">Talk is Cheap.</span>
            </a>
          </div>
        </li>
        <li>
          <NavLink to="/about" className="waves-effect">
            <span> Codeforces </span>
            <i className="small material-icons">send</i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/#" className="waves-effect">
            <span> Codechef </span>
            <i className="small material-icons">send</i>
          </NavLink>
        </li>
        <li>
          <div className="divider" />
        </li>
        <li>
          <a href="/#" className="subheader">
            <i className="small material-icons red-text">favorite</i> Built by
            Sabuj Jana.
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
