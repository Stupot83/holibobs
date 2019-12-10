import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-sm bg-light">
          <div className="navbar-nav">
            <Link
              to="/"
              className="col-md-6"
              >
              HOLIBOBS
            </Link>
          </div>
        </nav>
    );
  }
}

export default Navbar;



