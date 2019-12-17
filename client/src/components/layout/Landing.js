import React, { Component } from "react";
import "./Landing.scss";

class Landing extends Component {
  render() {
    return (
      <div className="landing__container">
        <h1 className="landing-heading--sub">Welcome to</h1>
        <h1 className="landing-heading--main">HOLIBOBS</h1>

        <div className="landing__button-container">
          <a href="/register" className="landing__button">
            Register
          </a>
          <a href="/login" className="landing__button">
            Login
          </a>
        </div>
        <img src="/images/suitcase.png" className="landing__image"></img>
      </div>
    );
  }
}

export default Landing;
