import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Link } from 'react-router';
import ModalForm from './ModalForm';

class App extends Component {

  get modal(){
    return window.$('#exampleModal1');
  }

  handleOpenClick = () => {
    window.$(document).foundation()
    this.modal.foundation('open');
  }

  handleCloseClick = () => {
    this.modal.foundation('close');
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
              <li><a onClick={this.handleOpenClick} >Modal</a></li>
              <li><Link to='/signup'>Sign up</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>
        </div>
        <ModalForm />
        {this.props.children}
    </div>
    );
  }
}

export default App;
