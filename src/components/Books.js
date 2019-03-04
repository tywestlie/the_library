import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchBooks } from '../actions/bookActions';
import StarRatingComponent from 'react-star-rating-component';

import BookForm from './Bookform'

 class Books extends Component {

  componentWillMount(){
    this.props.fetchBooks();
  }

   constructor() {
     super();
     this.state = { 
       showBookButton: false 
      }
   }

   _showBookButton = (bool) => {
     this.setState({
       showMessage: bool
     });
   }

  render() {
    const libItems = this.props.books.map(book =>(
      <div key={book.id}>
      <h3>{book.title}</h3>
      <h3>{book.author}</h3>
      <h3>{book.publisher}</h3>
      <h3>{book.publicationDate}</h3>
      <StarRatingComponent
          name="rating"
          editing={false}
          starCount={3}
          value={book.rating}
          />
      <h3>{book.status}</h3>
      </div>
    ))
    return (
      <div>
        <h1>Books</h1>
        <br/>
        <button onClick={this._showBookButton.bind(null, true)}>Add</button>
        { this.state.showMessage && ( <BookForm />) }
        <br/>
        {libItems}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  books: state.books.items
});

export default connect(mapStateToProps, { fetchBooks })(Books);