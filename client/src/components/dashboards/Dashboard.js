import React, { Component } from "react";
import Holiday from "./Holiday";
import Holidays from "./Holidays";
import Logout from "../auth/Logout-button"
import './dashboard.scss'

class Dashboard extends Component {

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="container-flex">
          <Holiday />
          <Holidays />
        </div>
        <div className="row">
          <div className="Dashboard">
            <Logout />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;