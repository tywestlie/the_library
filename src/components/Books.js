import React, { Component } from 'react'

import BookForm from './Bookform'

 class Books extends Component {

   constructor() {
     super();
     this.state = { showBookButton: false }
   }

   _showBookButton = (bool) => {
     this.setState({
       showMessage: bool
     });
   }

  render() {
    return (
      <div>
        <h1>Books</h1>
        <br/>
        <button onClick={this._showBookButton.bind(null, true)}>Add</button>
        { this.state.showMessage && ( <BookForm />) }
      </div>
    )
  }
}
export default Books