import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import path
import App from './app/App';
import { Provider } from 'react-redux';
import store from './app/store';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // createRoot is now correctly imported
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
