import React, { Component } from 'react';
import './App.css';
// import { Provider } from 'react-redux';

import AllBooks from "./components/AllBooks/AllBooks"

// import store from './store';


class App extends Component {
  render() {
    return (
      // <Provider store={store}>
        <div className="App">
        <AllBooks />
        </div>
      // </Provider>
    );
  }
}

export default App;
