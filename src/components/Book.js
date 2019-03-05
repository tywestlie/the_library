import React, { Component } from 'react';
import { connect } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';

class Book extends Component {
  render() {
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
        <button>Edit</button>
      </div>
    )
  }
}

export default connect()(Book);