import {  combineReducers } from 'redux'; // for combining the reducers 
import { configureStore } from '@reduxjs/toolkit';// createStore equivalent . createStore is deprecated 
import { favoriteRecipesReducer } from './features/favoriteRecipes/favoriteRecipesSlice.js';
import { searchTermReducer } from './features/searchTerm/searchTermSlice.js';
import { allRecipesReducer } from './features/allRecipes/allRecipeSlice.js';


/**
 * Combines the reducers for the favoriteReducer, searchTermReducer and allRecipesReducer
 * @param { combineReducers({reducers})}
 * @constant
 * @type {Reducer}
 * @default
 */

const rootReducer = combineReducers({
    favoriteRecipes: favoriteRecipesReducer,
    searchTerm: searchTermReducer,
    allRecipes: allRecipesReducer
  });

/**
 * 
 * when you combine reducers this way , the state object will have a structure such as this 
   * {
    favoriteRecipes: [...], // State managed by favoriteRecipesReducer
    searchTerm: '', // State managed by searchTermReducer
    allRecipes: [...] // State managed by allRecipesReducer
    }
 */

/**
 * configures the Redux store with the root reducer 
 * 
 * @function
 * @name configureStore
 * @param {object} reducer - the root reducer for the store 
 * @return {store} The redux store configured with the root reducer 
 * 
 * @example 
 * import { store } from 'path/to/store';
 * //use the store in your application, typically with the <Provider> component from react-redux
 */
                                                                                                
export const store = configureStore({
    reducer:rootReducer
});

// nb createStore is deprecated and therefore you can eiter use it by having legacy_createStore

/**
 * in a redux application the store is a central piece that holds the applications state and provides 
 * methods to interact with that state. It serves several crucial function 
 * 
 * so note that the store is the one that imports the Reducers 
 * 
 * @state_management :responsible for holding the entire state of the application. it acts as a single source 
 * of truth , ensuring that the state is centralized and consistent throughout the app. so the return  from the 
 * reducer functions is maintained by redux across different calls.so initially when the application is rendered
 * then what happens is that loadData returns the all Recipes data 
 * 
 * @dispatching_actions : the store provides dispatch methods which allow you to send actions to the store .
 * these actions describe the state change and are handled by reducer 
 *@example : store.dispatch({type: 'INCREMENT'})  -- this is the action 
 *
 * @registering_Reducers : the store uses reducers to manage state updates. when the action is dispatched , 
 * the store passes the current state and the action to the reducers, which returns a new state 
 * @example : const rootReducer = combineReducers({ counter : counterReducer, todos:todosReducer })
 * and then create the store object as above 
 * const store = configureStore({reducer: rootReducer})
 * 
 * @subscribing_to_state_changes : the store provides the subscribe method which allows components or other 
 * parts of the application to listen to state changes when the state changes subscribed to the listeners are notified 
 *
 * @accessing_state : the store provides the getState() method to retrieve the current state.This is useful for accessing the 
 * state without triggering state change
 * 
 * 
 * 
 * note that when a Redux processes an action and returns a new state, any connected components that 
 * depends on that state will re-render. This is an essential aspect of how react and redux works 
 * together to ensure that the UI stays in sync with your applications state
 * 
 * components that use useSelector or are connected via connect (for a class components) subscribe to 
 * specific slices of the state
 * 
 * when the state changes, useSelector or connect will trigger a rerender of the components that depend on the
 * updated state
 */