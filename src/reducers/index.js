import { combineReducers } from 'redux';
import bookReducer from './postReducer';

export default combineReducers({
  books: bookReducer
});