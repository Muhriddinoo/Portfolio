import React, { Component } from "react";
import "../css/Main.css";
import rasm from "../images/rasm.jpg";

export class Main extends Component {
  render() {
    return (
      <>
        <div className="main">
          <div className="container">
            <div className="main-inner">
              <div className="main-text">
                <h1>
                  Hi, I'm <span>Muhriddin Jamoldinov</span>
                </h1>
                <div className="text-animate">
                  <h3>Frontend Developer</h3>
                </div>
                <p>
                  I am reading Jamoldinov Muhriddin's web programming guide at
                  the moment.
                </p>
                <div className="btn-box">
                  <a href="#" className="btn">
                    Read more
                  </a>
                </div>
                <div className="boglanish">
                  <a href="https://t.me/muhridin_1">
                    <div className="bx bxl-telegram"></div>
                  </a>
                  <a href="https://www.instagram.com/?utm_source=pwa_homescreen&__pwa=1">
                    <div className="bx bxl-instagram"></div>
                  </a>
                  <a href="#">
                    <div className="bx bxl-github"></div>
                  </a>
                </div>
              </div>
              <div className="main-img">
                <div className="img">
                  <img src={rasm} alt="" className="rasm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
