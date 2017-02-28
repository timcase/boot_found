import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
    <div>
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text"><h1>Booter</h1></li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li><Link to='/signup'>Sign up</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>
        </div>
        {this.props.children}
    </div>
    );
  }
}

export default App;
