import React, { Component } from "react";
import "../css/Navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <>
        <div className="navbar">
          <div className="container">
            <div className="navbar-inner">
              <a href="#" className="logo">
                Muhriddin
              </a>
              <div className="bx bx-menu" id="menu-icon"></div>
              <div className="links">
                <ul>
                  <li>
                    <a href="#header">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#sikl">Skils</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
