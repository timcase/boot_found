import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import './index.css';
import Home from 'react-router';
import Signup from './Signup';
import Login from './Login';
import TodoList from './TodoList';

window.$(document).foundation()

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/todos" component={TodoList} />
    </Route>
  </Router>
  ),
  document.getElementById('root')
);
