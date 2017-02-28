import React, { Component } from 'react';
import { Link } from 'react-router';

class Signup extends Component {

  render() {
    return (
      <div className="row">
        <div className="large-5 small-centered columns">
          <div className="alert-callout callout">
            <h6>There was a problem creating your account</h6>
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
                <label>Name
                  <input type="text" placeholder="John Doe"/>
                </label>
                <label>Password
                  <input type="password" placeholder="password"/>
                </label>
                <button type="button" className="button expanded bg-blue">Sign up</button>
                <p className="text-center"><Link to="/login">Already have an account?</Link></p>
              </div>
            </div>
          </form>
        </div>
      </div>)
  }
}

export default Signup;
