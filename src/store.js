import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = { books:[
  {
    id: 0,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publisher: 'Scribner',
    publicationDate: '01/01/1925',
    rating: 1,
    status: 'Checked In',
    editing: false
  },
  {
    id: 1,
    title: 'Hitch Hikers Guide To The Galaxy',
    author: 'Douglas Adams',
    publisher: 'Random House',
    publicationDate: '02/02/1979',
    rating: 2,
    status: 'Checked Out',
    editing: false

  },
  {
    id: 2,
    title: 'Breakfast of Champions',
    author: 'Kurt Vonnegut',
    publisher: 'Dell',
    publicationDate: '11/03/1973',
    rating: 3,
    status: 'Checked Out',
    editing: false
  },
  {
    id: 3,
    title: 'Foundation',
    author: 'Issac Asimov',
    publisher: 'Random House',
    publicationDate: '1/01/1965',
    rating: 3,
    status: 'Checked In',
    editing: false
  }
]}

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;