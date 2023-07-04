import axios from 'axios';
export const fetchBookList = async () => {
  return await axios({
    method: 'get',
    url: 'https://books-list-api.vercel.app/books',

    headers: {
      'x-api-key': '#b0@6hX8YasCq6^unOaPw1tqR',
    },
  });
};
