import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="Landing">
            <div className="row">
              <a href="/register" className="register">
                Register
              </a>
              <a href="/login" className="login">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
