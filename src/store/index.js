import rootReducer from './reducers/index';
import {configureStore} from '@reduxjs/toolkit';

let store = configureStore({
  reducer: rootReducer,
});
export {store};
