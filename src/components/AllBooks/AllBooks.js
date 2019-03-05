import React, { Component } from 'react'
import Book from '../Book/Book'
import BookForm from '../BookForm/BookForm'
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
       showAddBookButton: false,
       showEditBookButton: false,
       books: store.getState().books
      }
     store.subscribe(this.onstoreUpdate.bind(this))
   }

   _showAddBookButton = (bool) => {
     if(this.state.showForm === false){
       this.setState({
         showForm: true
       })
     }else{
       this.setState({
         showForm: false 
       })
     }
   };

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
            {book.editing ? <EditBookForm store={store} book={book} key={book.id} /> :
              <Book store={store} key={book.id} book={book} />}
          </div>
        )}
 
      </div>
    )
  }
}

export default AllBooks;