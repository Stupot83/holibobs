import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Countdown from "./Countdown";
import Holiday from "./Holiday";
import Holidays from "./Holidays";

class Dashboard extends Component {
  constructor() {
    super();
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <Holiday />
        <Holidays />
        <div className="row">
          <div className="Dashboard">
            <div className="row">
              <button onClick={this.onLogoutClick} className="logout">
                Logout
              </button>
            </div>
            <Countdown />
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
