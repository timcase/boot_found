import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
              <li><a href="#">Signup</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="large-12 columns">
            <div className="callout">
              <h2>Todo so cool, so list</h2>
              <p>This is a magic web app</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="large-12 columns">
            <div className="footer">
              <p>content</p>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default App;
