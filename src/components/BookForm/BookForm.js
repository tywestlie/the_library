import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './BookForm.css';

 class BookForm extends Component {

   constructor(props) {
     super(props);
     this.state = {
       title: '',
       author: '',
       publisher: '',
       publicationDate: '',
       rating: 1,
       status: ''
     }

     this.onChange = this.onChange.bind(this);
     this.onSelectChange = this.onSelectChange.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
   }

   onChange(e) {
     this.setState({ [e.target.name]: e.target.value });
   }

   onSelectChange(e) {
     this.setState({ status: e.target.value} );
   }

   onSubmit(e) {
     e.preventDefault();
     const book = {
       title: this.state.title,
       author: this.state.author,
       publisher: this.state.publisher,
       publicationDate: this.state.publicationDate,
       rating: this.state.rating,
       status: this.state.status
     }
     //call item
     this.props.store.dispatch({
       type: 'NEW_BOOK',
       book: book
     })
     this.setState({
       title: '',
       author: '',
       publisher:'',
       publicationDate: '',
       raiting: 1, 
       status: 'Checked In'
     });
   }

   onStarClick(nextValue, prevValue, name) {
     this.setState({ rating: nextValue });
   }

  render() {

    return (
      <div class='book-form'>
        <h2>Add Book</h2>
        <form onSubmit={this.onSubmit} id="add-book-form">
          <div>
            <label>Title: </label>
            <br />
            <input class='add-text-limit' required maxlength="64" type="text" name="title" onChange={this.onChange} value={this.state.title} />
          </div>
          <div>
            <label> Author: </label><br />
            <input class='add-text-limit' required maxlength="64" type="text" name="author" value={this.state.author} onChange={this.onChange} />
          </div>
          <div>
            <label> Publisher: </label><br />
            <input class='add-text-limit' required maxlength="64" type="text" name="publisher" value={this.state.publisher} onChange={this.onChange} />
          </div>
          <div>
            <label> Publication Date: </label><br />
            <input type="text" 
                   name="publicationDate" 
                   data-parse="date" 
                   placeholder="MM/DD//YYYY"
                   pattern="\d{2}\/\d{2}/\d{4}" 
                   value={this.state.publicationDate} 
                   onChange={this.onChange} required
              />
          </div>
          <div>
            <label> Rating: </label><br />
            <StarRatingComponent
              class= "browser-default"
              name = 'rating'
              starCount={3}
              value={this.state.rating}
              onStarClick={this.onStarClick.bind(this)}
              />
          </div>
          <div>
            <label> Status: </label><br />
            <select required value={this.state.status.value} onChange={this.onSelectChange}>
              <option value="Checked In">Checked In</option>
              <option value="Checked Out">Checked Out</option>
            </select>
          </div>
          <br />
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}

export default BookForm;
