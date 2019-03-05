import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchBooks } from '../actions/bookActions';

import Book from './Book'
import BookForm from './Bookform'
import Editbookform from './Editbookform';
import store from '../store';

 class AllBooks extends Component {

  onstoreUpdate() {
    this.setState({
     books: store.getState().books
    })
  }

   constructor() {
     super();
     this.state = { 
       showAddBookButton: false,
       showEditBookButton: false,
       books: store.getState().books
      }
     store.subscribe(this.onstoreUpdate.bind(this))
   }

   _showAddBookButton = (bool) => {
     this.setState({
       showForm: true
     });
   }
   _showEditBookButton = (bool) => {
     this.setState({
       showEdit: bool
     });
   }

  render() {
    return (
      <div>
        <h1>My Library</h1>
        <br/>
        <button onClick={this._showAddBookButton}>Add</button>
        { this.state.showForm && ( <BookForm store={store} />) }
        <br/>
        {this.state.books.map((book) =>
          <div key={book.id}>
            {book.editing ? <Editbookform book={book} key={book.id} /> :
              <Book key={book.id} book={book} />}
          </div>
        )}
 
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//   books: state.books.items,
//   newBook: state.books.item
// });

export default AllBooks;