const data = [];

const bookList = (state = data, action) => {
  switch (action.type) {
    case 'GET_BOOK_LIST':
      return action.payload;
    default:
      return state;
  }
};
export default bookList;
