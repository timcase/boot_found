import React, { Component } from 'react';
import './TodoList.css';
import 'rc-checkbox/assets/index.css';
import Checkbox from 'rc-checkbox';


class TodoList extends Component {
  handleChange = () => {

  }

  render() {
    return (
    <div>
        <div className="row">
          <div className="large-10 enter-todo small-centered columns">
            <form>
              <input type="text" placeholder="What needs doing?"/>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="large-10 columns">
            <ul className="todo-list">
              <li>
                  <div className="checkbox">
                    <input type="checkbox" unchecked
                      id="todo_1_checkbox"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="todo_1_checkbox"></label>
                  </div>
                  <div className="description">
                    Go fishing
                  </div>
              </li>
              <li>
                  <div className="checkbox">
                    <input type="checkbox" unchecked
                      id="todo_1_checkbox"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="todo_1_checkbox"></label>
                  </div>
                  <div className="description">
                    Eat more kale
                  </div>
              </li>
              <li>
                  <div className="checkbox">
                    <input type="checkbox" unchecked
                      id="todo_1_checkbox"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="todo_1_checkbox"></label>
                  </div>
                  <div className="description">
                    Find Malcolm
                  </div>
              </li>
              <li className="completed">
                  <div className="checkbox">
                    <input type="checkbox" unchecked
                      id="todo_1_checkbox"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="todo_1_checkbox"></label>
                  </div>
                  <div className="description">
                    Live another day
                  </div>
              </li>
              <li>
                <div className="status row">
                    35% complete (9 of 14 tasks remaining)
                </div>
              </li>
            </ul>
          </div>
        </div>
    </div>
    )
  }
}

export default TodoList;
