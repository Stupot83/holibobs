import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Landing.scss";

class Landing extends Component {
  render() {
    return (
      <div className="container Landing">
        <div className="row">
          <div className="">
            <Link to="/" className=""></Link>
            <img src="./images/plane.png" alt="plane" className="plane"></img>
            <div className="landing__container">
              <h1 className="landing-heading--sub">Welcome to</h1>
              <h1 className="landing-heading--main">HOLIBOBS</h1>

              <div className="landing__button-container">
                <a href="/register" className="landing__button register">
                  Register
                </a>
                <a href="/login" className="landing__button login">
                  Login
                </a>
              </div>
              <img src="/images/suitcase.png" alt="icon" className="landing__image"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
