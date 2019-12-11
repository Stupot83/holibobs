import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container Login">
        <div className="row">
          <div className="">
            <Link to="/" className=""></Link>
            <img src="./images/plane.png" alt="plane" className="plane"></img>
            <div className="card-center">
              <div className="card-slider">
                <p className="card-slider-heading">Welcome To Holibobs</p>
                <p className="card-slider-text">
                  Log In To Access Your Account
                </p>
                <img
                  src="./images/suitcase.png"
                  alt="icon"
                  className="card-slider-icon"
                />
              </div>
              <div className="form-login">
                <form noValidate onSubmit={this.onSubmit}>
                <div className="">
                  <label htmlFor="email">Email</label>
                  <input
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    id="email"
                    type="email"
                    className={classnames("input-text", {
                      invalid: errors.email || errors.emailnotfound
                    })}
                  />
                  <span className="red-text">
                    {errors.email}
                    {errors.emailnotfound}
                  </span>
                  </div>
                  <div className="">
                    <label htmlFor="password">Password</label>
                    <input
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                      className={classnames("input-text", {
                        invalid: errors.password || errors.passwordincorrect
                      })}
                    />
                    <span className="red-text">
                      {errors.password}
                      {errors.passwordincorrect}
                    </span>
                  </div>
                  <div className="login-button">
                    <button type="submit" className="input-submit">
                      Login
                  </button>
                    <p className="button-link">
                      Don't have an account? <Link to="/register">Register</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
