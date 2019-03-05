import React, { Component } from 'react';
import './App.css';

import AllBooks from "./components/AllBooks/AllBooks"

class App extends Component {
  render() {
    return (
        <div className="App">
        <AllBooks />
        </div>
    );
  }
}

export default App;
