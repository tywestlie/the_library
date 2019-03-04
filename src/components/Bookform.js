import React, { Component } from 'react'

 class BookForm extends Component {
  render() {
    return (
      <div>
        <h1>Add Book</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
          </div>
          <div>
            <label> Author: </label><br />
            <br />
            <input type="text" name="author" value={this.state.author} onChange={this.onChange} />
          </div>
          <div>
            <label> Publisher: </label><br />
            <br />
            <input type="text" name="publisher" value={this.state.publisher} onChange={this.onChange} />
          </div>
          <div>
            <label> Publication Date: </label><br />
            <br />
            <input type="text" name="publicationDate" value={this.state.publicationDate} onChange={this.onChange} />
          </div>
          <div>
            <label> Rating: </label><br />
            <br />
            <input type="text" name="rating" value={this.state.publicationDate} onChange={this.onChange} />
          </div>
          <div>
            <label> Status: </label><br />
            <br />
            <input type="text" name="rating" value={this.state.publicationDate} onChange={this.onChange} />
          </div>
          <br />
          <button type="submit">Button</button>
        </form>
      </div>
    )
  }
}

export default BookForm;
