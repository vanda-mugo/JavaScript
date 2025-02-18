import React from 'react';

import { Inventory } from '../features/inventory/Inventory.jsx';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter.jsx';
// Import the Cart component here.
import { Cart } from '../features/cart/Cart.jsx';
import { SearchTerm } from '../features/searchTerm/SearchTerm.jsx';

// Render the Cart component below <Inventory />
export const App = (props) => {

  const { state, dispatch } = props;

  const visibleInventoryItems = getFilteredItems(state.inventory, state.searchTerm)

  return (
    <div>
      <SearchTerm
        searchTerm={state.searchTerm}
        dispatch={dispatch}
      />
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Inventory
        inventory={visibleInventoryItems}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Cart 
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

    </div>
  );
};


function getFilteredItems(items, searchTerm) {
  return items.filter(items => items.name.toLowerCase().includes(searchTerm.toLowerCase()));
}
