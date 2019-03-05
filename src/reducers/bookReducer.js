import { FETCH_BOOKS, NEW_BOOK, EDIT_BOOK } from '../actions/types';

const initialState = {
  books: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        books: action.payload
      };
    case NEW_BOOK:
      action.book.id = state.length;
      state.unshift(action.book);
      return state;
    case EDIT_BOOK:
      return state.map((book) => book.id === action.id ? { ...book, editing: !book.editing } : book)
    case 'UPDATE':
      return state.map((book) => {
        if (book.id === action.id) {
          return {
            ...book,
            title: action.data.title,
            author: action.data.author,
            publisher: action.data.publisher,
            publicationDate: action.data.publicationDate,
            rating: action.data.rating,
            status: action.data.status,
            editing: !book.editing
          }
        } else return book;
      })
    default:
      return state;
  }
}