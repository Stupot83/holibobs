import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    return (
      <div className="container">
        <div className="row" style={{ marginTop: "3rem" }}>
          <div
            className="col s8 darken-4 z-depth-5 Dashboard"
            style={{ height: "80vh" }}
          >
            <div className="row" style={{ marginTop: "1rem" }}>
              <button
                style={{
                  width: "200px",
                  height: "100px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "0.7rem",
                  marginLeft: "1rem"
                }}
                onClick={this.onLogoutClick}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3 left"
              >
                Logout
              </button>
            </div>
            <div className="row" style={{ marginTop: "3rem" }}></div>
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
