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


