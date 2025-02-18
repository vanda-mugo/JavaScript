import { addRecipe } from '../favoriteRecipes/favoriteRecipesSlice.js';
import { loadData } from './allRecipeSlice.js'

import React, { useEffect } from 'react';
import FavoriteButton from "../../components/FavouriteButton.jsx";
import Recipe from "../../components/Recipe.jsx";

const favoriteIconURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg'

/**
 * 
 * @param {*} props - allRecipes and the dispatch object which have state and the dispatch store function 
 * @returns - Div of each recipe
 * 
 * nb allRecipes is an array that is a state having many recipes 
 * 
 */

export const AllRecipes = (props) => {
  
  const { allRecipes, dispatch } = props;

  /**
   * the useEffect function below runs on first render due to empty dependency array 
   * on the first render dispatch(loadData()) is called which basically is the stores store.dispatch
   * with the actionCreator LoadData which returns type: 'allRecipes/loadData'
   * 
   * in this case teh allRecipesReducer returns the action.payload which in effect is the allRecipesData,
   * all recipes data contains an array of objects each having id,name and img
   * 
   */

  const onFirstRender = () => {
    dispatch(loadData());
  }
  useEffect(onFirstRender, [])
  
  const onAddRecipeHandler = (recipe) => {
    dispatch(addRecipe(recipe));
  };

  //note that allRecipes is a state and therefore this is the data from data.js
  //recipe is a single object     { id: 0, name: 'Biscuits', img:biscuits },

  return (
    <div className="recipes-container">
      {allRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onAddRecipeHandler(recipe)}
            icon={favoriteIconURL}
          >
            Add to Favorites
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};

/**
 * note that the function basically returns the view and redux maintains the state 
 * note that the dispatch function is used to dispatch an action to the store function 
 * a dispatched action generally changes the state of a slice 
 * 
 * dispatch(loadData()) in this case returns 
 * 
 * the flkow of this is to the App component where it then goes to the Main componenet then the main component is the one 
 * that has imported store from the store.js where store is the name of a function 
 * 
 * note that now within the store the dispatch calls the reducer functions with the relevant states to the relevant 
 * reducers 
 * 
 * so in this case  allRecipesReducer(allRecipes = initialStater, action)
 * 
 * 
 * its important to know that the components access the state from the redux store where the state is maintained 
 * the store updates the state with the return from the reducer
 *  
 * components access the state.allRecipes to render the recipe 
 * 
 *
 *  
 */


