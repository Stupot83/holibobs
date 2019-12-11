import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import "./Register.scss";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
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
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container Register">
        <div className="row">
          <div className="">
            <Link to="/" className=""></Link>
            <img src="./images/plane.png" alt="plane" className="plane"></img>
            <div className="card-center2">
              <div className="card-slider2">
                <p className="card-slider-heading2">Welcome To Holibobs</p>
                <p className="card-slider-text2">
                   Register to Join Us Today
                </p>
                <img
                  src="./images/suitcase.png"
                  alt="icon"
                  className="card-slider-icon2"
                />
              </div>
              <div className="form-register">
                <form noValidate onSubmit={this.onSubmit}>
                  <div className="">
                    <label htmlFor="name">Name</label>
                    <input
                      onChange={this.onChange}
                      value={this.state.name}
                      error={errors.name}
                      id="name"
                      type="text"
                      className={classnames("input-text", {
                        invalid: errors.name
                      })}
                    />
                    <span className="red-text">{errors.name}</span>
                  </div>
                  <div className="">
                    <label htmlFor="email">Email</label>
                    <input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      type="email"
                      className={classnames("input-text", {
                        invalid: errors.email
                      })}
                    />
                    <span className="red-text">{errors.email}</span>
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
                        invalid: errors.password
                      })}
                    />
                    <span className="red-text">{errors.password}</span>
                  </div>
                  <div className="">
                    <label htmlFor="password2">Confirm Password</label>
                    <input
                      onChange={this.onChange}
                      value={this.state.password2}
                      error={errors.password2}
                      id="password2"
                      type="password"
                      className={classnames("input-text", {
                        invalid: errors.password2
                      })}
                    />
                    <span className="red-text">{errors.password2}</span>
                  </div>
                  <div className="register-button">
                    <button type="submit" className="input-submit">
                      Sign up
                    </button>
                    <p className="button-link">
                      Already have an account? <Link to="/login">Log in</Link>
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
