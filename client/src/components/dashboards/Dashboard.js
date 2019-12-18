import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Holiday from "./Holiday";
import Holidays from "./Holidays";
import './dashboard.scss'
import Logout from "../auth/Logout-button"

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

// Dashboard.propTypes = {
//   logoutUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth
// });

export default Dashboard;
// export default connect(mapStateToProps, { logoutUser })(Dashboard);
