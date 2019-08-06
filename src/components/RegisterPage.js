import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { register } from "../actions/user.actions";

export class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      submitted: false
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { username, password } = this.state;
    // const { register } = this.props;

    const objUser = { username, password };
    this.props.register(objUser);
  };

  render() {
    const { username, password, submitted } = this.state;
    const { registration } = this.props;

    return (
      <div className='col-md-6 col-md-offset-3'>
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <div className={"form-group"}>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              name='username'
              className='form-control'
              onChange={this.handleChange}
              value={username}
            />

            {/* {submitted && !username && (
              <div className='help-block'>Username is required</div>
            )} */}
          </div>

          <div className={"form-group"}>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              className='form-control'
              onChange={this.handleChange}
              value={password}
            />
            {/* {submitted && !password && (
              <div className='help-block'>Password is required</div>
            )} */}
          </div>

          <div className='form-group'>
            <button type='submit' className='btn btn-primary'>
              Register
            </button>

            <Link to='/login' className='btn btn-link'>
              Cancel
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

// complete the below function
const mapStateToProps = state => ({
  registration: state.registration
});

export default connect(
  mapStateToProps,
  { register }
)(RegisterPage);
