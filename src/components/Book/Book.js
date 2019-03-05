import React, { Component } from 'react';
import './Book.css'
import StarRatingComponent from 'react-star-rating-component';

class Book extends Component {

  render() {
    return (
      <div class='book'>
        <h2>{this.props.book.title}</h2>
        <p>Author: {this.props.book.author}</p>
        <p>Publisher: {this.props.book.publisher}</p>
        <p>Publication Date: {this.props.book.publicationDate}</p>
        <p>Rating:</p>
        <StarRatingComponent
          name="rating"
          editing={false}
          starCount={3}
          value={this.props.book.rating}
        />
        <p>{this.props.book.status}</p>
        <button
          onClick={() => this.props.store.dispatch({ type: 'EDIT_BOOK', id: this.props.book.id })}>
          Edit</button>
      </div>
    )
  }
}

export default Book;