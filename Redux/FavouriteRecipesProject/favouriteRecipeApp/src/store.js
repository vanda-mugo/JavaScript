import {  combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { favoriteRecipesReducer } from './features/favoriteRecipes/favoriteRecipesSlice.js';
import { searchTermReducer } from './features/searchTerm/searchTermSlice.js';
import { allRecipesReducer } from './features/allRecipes/allRecipeSlice.js';

const rootReducer = combineReducers({
    favoriteRecipes: favoriteRecipesReducer,
    searchTerm: searchTermReducer,
    allRecipes: allRecipesReducer
  });

export const store = configureStore({
    reducer:rootReducer
});

// nb createStore is deprecated and therefore you can eiter use it by having legacy_createStore