import React, { Component } from 'react';

class ModalForm extends Component {

  render() {
    return (
          <div ref="exampleModal1" className="reveal" id="exampleModal1" data-reveal>
              <button className="close-button" aria-label="Close modal" type="button">
                  <span aria-hidden="true">&times;</span>
              </button>
              <h4>Create Todo</h4>
              <form>
                <label>Description
                  <input type="text" />
                </label>
                <div className="row float-right">
                  <div className="large-6 columns">
                    <button className="button secondary">
                      Cancel
                    </button>
                  </div>
                  <div className="large-6 columns">
                    <button className="button primary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>

          </div>
    )
  }
}

export default ModalForm;
