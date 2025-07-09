import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from './providers'
import { store } from './store';

import './App.css';

export const App = () => {
  return (
    <Provider store={store} >
      <RouterProvider />
    </Provider>
  )
};
