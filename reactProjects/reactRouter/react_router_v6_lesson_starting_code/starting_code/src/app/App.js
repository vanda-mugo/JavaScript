import React from "react";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Categories from "../components/Categories";
import Category from "../components/Category";
import Author from "../components/Author";
import Profile from "../components/Profile";
import EditProfileForm from "../components/EditProfileForm";
import Root from "../components/Root";

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Link, NavLink } from 'react-router-dom';

import "./App.css";

/*
so we shall explain what is happening here 
createBrowserRouter: Used to create a router with nested routes defined declaratively.

Router : this is a component or a library that manages navigation between different parts of your application . 
it basically maps URL paths to specific components, enabling the creation os single page application 
(SPA where the content changes dynamically without 
requiring a full page reload 
Role of router : 

Route mapping : it maps different URL paths to react components 

Navigation: Facilitates navigation within the application, allowing users to move between views.

URL Management: Handles browser history, and allows for the back and forward navigation.

Dynamic Routing: Supports parameters in routes to create dynamic, flexible paths.


createBrowserRouter is a function in React Router v6.4+ that creates a router instance using the browser's History API. 
It is used to define routes and nested routes in a declarative manner, which can be useful for large and complex applications.

The argument passed to createBrowserRouter is typically an array of route objects or a JSX-like structure 
(created using createRoutesFromElements). Each route object defines a path and the component that should be 
rendered when that path is matched.
*/

const router = createBrowserRouter(createRoutesFromElements(
  /* Wrap this Root Route to create Router here */
  <Route path="/" element={ <Root/> }>
    <Route path="/about" element={ <About/>}/>
    <Route path="/sign-up" element={ <SignUp/>}/>
    <Route path="/articles" element={ <Articles/>}/>
    <Route path="articles/:title"  element={ <Article/> }/>
    <Route path="authors/:name"  element={ <Author/> }/>
    <Route path="/categories" element={ <Categories/>}>
      <Route path=":name" element={<Category/>}/>
    </Route>
    <Route path="/profile" element={ <Profile/>}>
      <Route path="edit" element={ <EditProfileForm/> }/>
    </Route>
  </Route>))

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;


/*

so we checked one way to actually create the router instance the other way would be using the predefined routes 
children are the nested routes . 


import React from 'react'; 
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'; 
import Root from './components/Root'; 
import About from './components/About'; 
import SignUp from './components/SignUp'; 
import Articles from './components/Articles'; 
import Article from './components/Article'; 
import Categories from './components/Categories'; 
import Category from './components/Category'; 
import Author from './components/Author'; 
import Profile from './components/Profile'; 
import EditProfileForm from './components/EditProfileForm'; 

const router = createBrowserRouter([ 
{ path: '/', element: <Root />, 
      children: [ 
                  { path: 'about', element: <About /> }, 
                  { path: 'sign-up', element: <SignUp /> }, 
                  { path: 'articles', element: <Articles /> }, 
                  { path: 'articles/:title', element: <Article /> }, 
                  { path: 'authors/:name', element: <Author /> }, 
                  { path: 'categories', element: <Categories /> }, 
                  { path: 'categories/:categoryId', element: <Category /> }, 
                  { path: 'profile', element: <Profile />, 
                                      children: [ 
                                              { path: 'edit', element: <EditProfileForm /> }, 
                                                ] 
                  } 
                ] 
} 
]); 

const App = () => { 
  return ( <RouterProvider router={router} /> ); 
}; 

export default App;

*/



/*
The .createBrowserRouter method accepts an array of <Route> objects, so we’ll need to use React Router’s .
createRoutesFromElements method to configure our routes with JSX. We also need to use React Router’s <Route> 
component to define our routes. These components can be imported from the react-router-dom package, alongside the .
createBrowserRouter method, like so:
*/