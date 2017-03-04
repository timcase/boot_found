import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Link } from 'react-router';
import $ from 'jquery';

class App extends Component {
  handleClick = () => {
    const $modal = $(ReactDOM.findDOMNode(this.refs.exampleModal1));
    $modal.foundation('open');
  }

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
              <li><a onClick={this.handleClick} >Modal</a></li>
              <li><Link to='/signup'>Sign up</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>
          <div ref="exampleModal1" className="reveal" id="exampleModal1" data-reveal>
              <h1>Awesome. I Have It.</h1>
              <p className="lead">Your couch. It is mine.</p>
              <p>I'm a cool paragraph that lives inside of an even cooler modal. Wins!</p>
              <button className="close-button" data-close aria-label="Close modal" type="button">
                <span aria-hidden="true">&times;</span>
              </button>
          </div>
        </div>
        {this.props.children}
    </div>
    );
  }
}

export default App;
