import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class Book extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <h2>{this.props.book.title}</h2>
        <p>{this.props.book.author}</p>
        <p>{this.props.book.publisher}</p>
        <p>{this.props.book.publicationDate}</p>
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