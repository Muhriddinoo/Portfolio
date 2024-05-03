import React, { Component } from "react";
import { Header } from "./Header";
import "../css/App.css";
import { About } from "./About";
import { Sikl } from "./Sikl";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <About />
        <Sikl />
        <Contact />
        <Footer />
      </>
    );
  }
}
