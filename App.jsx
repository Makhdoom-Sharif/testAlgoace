import React from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/store';
import Navigation from './src/routes';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
