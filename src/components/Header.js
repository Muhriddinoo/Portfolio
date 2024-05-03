import React, { Component } from "react";
import { Navbar } from "./Navbar";
import { Main } from "./Main";
import "../css/Header.css";

export class Header extends Component {
  render() {
    return (
      <>
        <header id="header">
          <Navbar />
          <Main />
        </header>
      </>
    );
  }
}
