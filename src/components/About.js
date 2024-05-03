import React, { Component } from "react";
import "../css/About.css";
import rasm from "../images/rasm.jpg";

export class About extends Component {
  render() {
    return (
      <>
        <div id="about">
          <div className="container">
            <div className="about-inner">
              <h2 className="heading">
                About <span>Me</span>
              </h2>
              <div className="about-img">
                <img src={rasm} alt="" />
                <span className="circle-spin"></span>
              </div>
              <div className="about-text">
                <h3>Frontend Developer</h3>
                <p>
                  Men Jamoldinov Muhriddin Namangan viloyati Uchqo'rg'on tumani
                  40-sonli o'rta ta'lim maktabida tahsil olaman. Men bo'sh
                  vaqtimda bu vaqtdan unumli foydalangan holda "UCHKURGAN IT
                  SCHOOL" da Frontend dasturlash bo'yicha o'qiyman. Men ushbu
                  dastulash kursini 1 yildan beri o'qib bormoqdaman.
                </p>
              </div>
              <div className="btn-box btns">
                <a href="#" className="btn">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
