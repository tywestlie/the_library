import { FETCH_BOOKS, NEW_BOOK } from '../actions/types';

const initialState = {
  items: [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      publisher: 'Scribner',
      publishDate: '01/01/1925',
      rating: 1,
      status: 'checkedIn'
    },
    {
      id: 2,
      title: 'Hitch Hikers Guide To The Galaxy',
      author: 'Douglas Adams',
      publisher: 'Random House',
      publishDate: '02/02/1979',
      rating: 2,
      status: 'checkedOut'
    },
    {
      id: 3,
      title: 'Breakfast of Champions',
      author: 'Kurt Vonnegut',
      publisher: 'Dell',
      publishDate: '11/03/1973',
      rating: 3,
      status: 'checkedOut'
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