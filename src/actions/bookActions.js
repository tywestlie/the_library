import { FETCH_BOOKS, NEW_BOOK } from './types';
import store from '../store';

export const fetchBooks = () => dispatch => {
  return store.getState();
}

export const newBook = (book) => dispatch => {
 store.dispatch({
   type: NEW_BOOK,
   payload: book
 });
}