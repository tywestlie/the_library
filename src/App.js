import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Books from "./components/Books"

import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
        <Books />
        </div>
      </Provider>
    );
  }
}

export default App;
