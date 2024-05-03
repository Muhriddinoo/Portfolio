import React, { Component } from "react";
import "../css/Contact.css";

export class Contact extends Component {
  render() {
    return (
      <>
        <div id="contact">
          <div className="container">
            <div className="contact-inner">
              <h2 className="heading">
                Contact <span>Me!</span>
              </h2>
              <form action="">
                <div className="input-box">
                  <div className="input-field">
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      id="name"
                      autoComplete="off"
                    />
                    <span className="focus"></span>
                  </div>
                  <div className="input-field">
                    <input
                      type="email"
                      placeholder="Email Adress"
                      required
                      id="email"
                    />
                    <span className="focus"></span>
                  </div>
                </div>
                <div className="input-box">
                  <div className="input-field">
                    <input
                      type="number"
                      placeholder="Mobile Number"
                      required
                      id="phone"
                    />
                    <span className="focus"></span>
                  </div>
                  <div className="input-field">
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                    />
                    <span className="focus"></span>
                  </div>
                </div>
                <div className="textarea-field">
                  <textarea
                    name=""
                    id="message"
                    cols={30}
                    rows={10}
                    placeholder="Your Message"
                    required
                  ></textarea>
                  <span className="focus"></span>
                </div>
                <div className="one">
                  <input type="checkbox" className="bosin" />
                  <span>Remember Password</span>
                </div>
                <div className="btn-box btns">
                  <button type="submit" className="btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
