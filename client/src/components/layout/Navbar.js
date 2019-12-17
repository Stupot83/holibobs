import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav className="navbar-container">
          <div className="navbar-links">
            <Link to="/" className="link">HOLIBOBS</Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
