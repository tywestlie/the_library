import React, { Component } from 'react';
import './App.css';
import store from "./store"

import AllBooks from "./components/AllBooks/AllBooks"
import BookForm from "./components/BookForm/BookForm"

class App extends Component {
  constructor() {
    super();
    this.state = {
      showAddBookButton: false,
      showEditBookButton: false
    }
  }

  _showAddBookButton = (bool) => {
    if (this.state.showForm === false) {
      this.setState({
        showForm: true
      })
    } else {
      this.setState({
        showForm: false
      })
    }
  };


  render() {
    return (
        <div className="App">
        <div className='title'>
          <h1>My Library</h1>
        </div>
        <div className='add-btn-container'>
          <button className='add-btn' onClick={this._showAddBookButton}>Add</button>
          {this.state.showForm && (<BookForm store={store} />)}
          <AllBooks />
        </div>
        </div>
    );
  }
}

export default App;
