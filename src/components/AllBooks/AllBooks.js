import React, { Component } from 'react'
import './AllBooks.css'
import Book from '../Book/Book'
import EditBookForm from '../EditBookForm/EditBookForm';
import store from '../../store';

 class AllBooks extends Component {

  onstoreUpdate() {
    this.setState({
     books: store.getState().books
    })
  }

   constructor() {
     super();
     this.state = { 
       books: store.getState().books
      }
     store.subscribe(this.onstoreUpdate.bind(this))
   }

  render() {
    return (
      <div className='all-books'>
        {this.state.books.map((book) =>
          <div key={book.id}>
            {book.editing ? <EditBookForm store={store} book={book} key={book.id} /> :
              <Book store={store} key={book.id} book={book} />}
          </div>
        )}
 
      </div>
    )
  }
}

export default AllBooks;