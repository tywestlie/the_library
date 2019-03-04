import { FETCH_BOOKS, NEW_BOOK } from '../actions/types';

const initialState = {
  items: [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      publisher: 'Scribner',
      publishDate: '01/01/1925',
      rating: 3,
      status: 'checkedIn'
    }
  ],
  item: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}