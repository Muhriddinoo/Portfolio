import React, { Component } from "react";
import "../css/Sikl.css";

export class Sikl extends Component {
  render() {
    return (
      <>
        <div id="sikl">
          <div className="container">
            <div className="sikl-inner">
              <h2 className="heading">
                My <span>Skills</span>
              </h2>
              <div className="skills-row">
                <div className="skills-column">
                  <h3 className="title">Coding Skills</h3>
                  <div className="skills-box">
                    <div className="skills-content">
                      <div className="progress">
                        <h3>
                          HTML <span>100%</span>
                        </h3>
                        <div className="bar">
                          <span></span>
                        </div>
                      </div>
                      <div className="progress">
                        <h3>
                          CSS <span>90%</span>
                        </h3>

                        <div className="bar">
                          <span></span>
                        </div>
                      </div>
                      <div className="progress">
                        <h3>
                          JAVASCRIPT <span>65%</span>
                        </h3>

                        <div className="bar">
                          <span></span>
                        </div>
                      </div>
                      <div className="progress">
                        <h3>
                          React.JS <span>75%</span>
                        </h3>

                        <div className="bar">
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
