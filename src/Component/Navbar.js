import React, { useState } from "react";
import mainlogo from "../assets/main-logo.png";
import "./Krustycone.css";

export const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Toggle the collapse state
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-md fixed-top bg-white shift">
        <div
          className={`navbar-collapse collapse w-100 dual-collapse2 order-1 order-md-0 ${isCollapsed ? "" : "show"
          }`}
        >
          <ul className="navbar-nav nav1 text-center">
            <li className="nav-item active">
              <a className="nav-link scroll" href="#home">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scroll" href="#about">
                ABOUT US
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scroll" href="#menu">
                MENU
              </a>
            </li>
          </ul>
        </div>
        <div className="mx-auto order-0 order-md-1 position-relative main-logo">
          <a className="mx-auto" href="#">
            <img src={mainlogo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
        </div>
        <div
          className={`navbar-collapse collapse w-100 dual-collapse2 order-2 order-md-2 ${
            isCollapsed ? "" : "show"
          }`}
        >
          <ul className="navbar-nav nav2 mr-auto text-center">
            <li className="nav-item">
              <a className="nav-link scroll" href="#review">
                REVIEWS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scroll" href="#gallery">
                GALLERY
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scroll" href="#contact">
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
