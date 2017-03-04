import React, { Component } from 'react';

class ModalForm extends Component {

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
          <div ref="exampleModal1" className="reveal" id="exampleModal1" data-reveal>
              <h1>Awesome. I Have It.</h1>
              <p className="lead">Your couch. It is mine.</p>
              <p>I'm a cool paragraph that lives inside of an even cooler modal. Wins!</p>
              <button className="close-button" onClick={this.handleCloseClick} aria-label="Close modal" type="button">
                <span aria-hidden="true">&times;</span>
              </button>
          </div>
    )
  }
}

export default ModalForm;
