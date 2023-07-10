import axios from 'axios';
import {API_KEY} from '@env';

export const fetchBookList = async () => {
  return await axios({
    method: 'get',
    url: 'https://books-list-api.vercel.app/books',

    headers: {
      'x-api-key': API_KEY,
    },
  });
};
