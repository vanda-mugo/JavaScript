import React from 'react';

import { AllRecipes } from './features/allRecipes/allRecipes.jsx';
import { SearchTerm } from './features/searchTerm/SearchTerm.jsx';
// Import the FavoriteRecipes component here.
import FavoriteRecipes from './features/favoriteRecipes/FavoriteRecipes.jsx';



export function App(props) {
  // note by this prop is from the Main.jsx where the store object has been sent to the child component as prop
  const {state, dispatch} = props;

  /**
   * state.allRecipes in this case is a specific slice 
   * so within the store object we combine the reducers such that 
   * 
   * const rootReducer = combineReducer({
   * favoriteRecipes: favoriteRecipesReducer,
   * searchTerm: searchTermReducer,
   * allRecipes: allRecipesReducer })
   * 
   * this state.allRecipes : returns the allRecipes slice which returns the allRecipes state 
   * 
   */
  const visibleAllRecipes = getFilteredRecipes(state.allRecipes, state.searchTerm);
  const visibleFavoriteRecipes = getFilteredRecipes(state.favoriteRecipes, state.searchTerm);

  // Render the <FavoriteRecipes /> component.
  // Pass `dispatch` and `favoriteRecipes` props.
  return (
    <main>
      <section>
        <SearchTerm
          searchTerm={state.searchTerm}
          dispatch={dispatch}
        />
      </section>
      <section>
        <h2>Favorite Recipes</h2>
        <FavoriteRecipes 
          favoriteRecipes={visibleFavoriteRecipes}
          dispatch={dispatch}
        />
      </section>
      <hr />
      <section>
        <h2>All Recipes</h2>
        <AllRecipes
          allRecipes={visibleAllRecipes} 
          dispatch={dispatch}
        />
      </section>
    </main>
  )
}

/* Utility Helpers */

function getFilteredRecipes(recipes, searchTerm) {
  return recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));
}


/**
 * <AllRecipes
    allRecipes={visibleAllRecipes} 
    dispatch={dispatch}
  />

  now note that the function of the component is to basically update the view which is the UI you see 
  the function of the state in this case is what you see on the UI
  the function of the reducer is to update the state based on an action 
  the reducer receives the action and the state 
  the action is dispatched to the reducer by the store.dispatch(actionCreator)


  so in this case the component receives the allRecipes and dispatch props
  the allRecipes is basucally a result of state returned by the allRecipesReducer 
  // the rest we continue within the component

 */