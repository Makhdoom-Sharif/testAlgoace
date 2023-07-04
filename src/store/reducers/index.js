import {combineReducers} from '@reduxjs/toolkit';
import bookList from './bookList';
const rootreducer = combineReducers({
  bookList,
});

export default rootreducer;
