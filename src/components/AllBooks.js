import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchBooks } from '../actions/bookActions';
import StarRatingComponent from 'react-star-rating-component';

import Book from './Book'
import BookForm from './Bookform'
import EditBookForm from './Editbookform';

 class AllBooks extends Component {

  componentWillMount(){
    this.props.fetchBooks();
  }

   constructor() {
     super();
     this.state = { 
       showAddBookButton: false,
       showEditBookButton: false 
      }
   }

   _showAddBookButton = (bool) => {
     this.setState({
       showForm: bool
     });
   }
   _showEditBookButton = (bool) => {
     this.setState({
       showEdit: bool
     });
   }

   componentWillReceiveProps(nextProps) {
     if (nextProps.newBook) {
       this.props.books.unshift(nextProps.newBook);
     }
   }

  render() {
    return (
      <div>
        <h1>My Library</h1>
        <br/>
        <button onClick={this._showAddBookButton.bind(null, true)}>Add</button>
        { this.state.showForm && ( <BookForm />) }
        <br/>
        {this.props.books.map((book) => <Book key={book.id} book={book}/>)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  books: state.books.items,
  newBook: state.books.item
});

export default connect(mapStateToProps, { fetchBooks })(AllBooks);