import React, { Component } from 'react';
import { Link } from 'react-router';
import './Login.css';

class Login extends Component {

  render() {
    return (
      <div className="row">
        <div className="large-5 small-centered columns">
          <div className="alert-callout callout">
            <h6>Account could not be found</h6>
          </div>
          <form>
            <div className="row">
              <div className="medium-12 columns">
                <span className="invalid">
                  <label >Email
                    <input type="text" placeholder="you@example.com"/>
                  </label>
                  <p className="help-text">Please enter your email</p>
                </span>
                <label>Password
                  <input type="password" placeholder="password"/>
                </label>
                <button type="button" className="button expanded bg-blue">Login</button>
                <p className="text-center"><a href="#">Forgot your password?</a></p>
                <p className="text-center"><Link to="/signup">Create a new account?</Link></p>
              </div>
            </div>
          </form>
        </div>
      </div>)
  }
}

export default Login;
