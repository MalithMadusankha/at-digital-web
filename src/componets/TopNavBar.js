import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import { IoMdClose } from "react-icons/io";

const TopNavBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light top-bar">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>

        <button
          className="navbar-toggler text-white"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end ${
            isCollapsed ? "" : "show bg-white"
          }`}
          id="navbarNav"
        >
          {isCollapsed ? (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  SERVICES
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">
                  ABOUT US
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">
                  CONTACT US
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/careers">
                  CAREERS
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav p-3">
              <IoMdClose
                style={{ position: "absolute", right: 30, fontSize: 25 }}
                color="black"
                onClick={() => setIsCollapsed(true)}
              />
              <li className="nav-item">
                <Link className="nav-link text-black" to="/">
                  SERVICES
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/about">
                  ABOUT US
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/contact">
                  CONTACT US
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/careers">
                  CAREERS
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
