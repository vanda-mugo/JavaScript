import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App.jsx';
// Import 'store' here.
import { store } from './store.js';

const root = createRoot(document.getElementById('root'));

/**
 * note that the store has the combined reducers 
 * this reducers are favoriteRecipesReducer,searchTermReducer,allRecipesReducer
 * 
 */

const render = () => {
  // Pass `state` and `dispatch` props to <App />
  root.render(
    <App 
      state={store.getState()}
      dispatch={store.dispatch}
    />,
  )
}
render();
// Subscribe render to changes to the `store`
store.subscribe(render);
