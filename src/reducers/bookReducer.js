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
      return{
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}