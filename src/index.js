import ReactDOM from 'react-dom';
import React from 'react';
import './index.scss';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
  } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, 
  document.getElementById('root'));

