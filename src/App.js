import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Booter</li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li><a href="#">Signup</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
