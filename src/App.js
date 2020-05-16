import React from 'react';
import Homepage from '../src/container/homepage/homepage.component';
import { Provider } from 'react-redux';
import {store} from './redux/store'
import './App.scss';
function App () {
  return (
    <Provider store={store}>
      <Homepage/>
    </Provider>
  );
}

export default App;
