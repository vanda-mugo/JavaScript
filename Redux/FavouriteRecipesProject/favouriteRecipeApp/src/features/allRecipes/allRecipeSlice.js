// Importing allRecipesData from the data file
import allRecipesData from '../../data';

/**
 * Action Creator: loadData
 * This function creates an action to load the initial recipe data into the store.
 * @returns {object} The action object with type 'allRecipes/loadData' and the payload of all recipes data.
 */
export const loadData = () => {
  return {
    type: 'allRecipes/loadData',
    payload: allRecipesData
  };
};

// Initial state for the allRecipes slice of state
const initialState = [];

/**
 * Reducer: allRecipesReducer
 * This reducer function manages the state of all recipes based on different actions.
 * @param {array} allRecipes - The current state of the all recipes slice.
 * @param {object} action - The action dispatched to the reducer.
 * @returns {array} The new state of the all recipes slice.
 */
export const allRecipesReducer = (allRecipes = initialState, action) => {
  switch (action.type) {
    case 'allRecipes/loadData':
      // Handles the 'allRecipes/loadData' action by setting the state to the payload (all recipes data)
      return action.payload;
    case 'favoriteRecipes/addRecipe':
      // Handles the 'favoriteRecipes/addRecipe' action by removing the added recipe from the all recipes list
      return allRecipes.filter(recipe => recipe.id !== action.payload.id);
    case 'favoriteRecipes/removeRecipe':
      // Handles the 'favoriteRecipes/removeRecipe' action by adding the removed recipe back to the all recipes list
      return [...allRecipes, action.payload];
    default:
      // Returns the current state if the action type doesn't match any case
      return allRecipes;
  }
};


/**
 * this is for maintaining the slice 
 * 
 */