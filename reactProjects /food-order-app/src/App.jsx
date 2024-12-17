import React from 'react';
import FoodOrderForm from './FoodOrderForm';
import FoodItem from "./FoodItem";
import styles from "./App.module.css";
import Header from './Header';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <FoodItem name="Shakshuka" price={5.99} imgSrc="https://images.unsplash.com/photo-1590412200988-a436970781fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
      <FoodItem name="Spaghetti Carbonara" price={6.99} imgSrc="https://images.unsplash.com/photo-1608756687911-aa1599ab3bd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
      <FoodItem name="Margherita Pizza" price={2.99} imgSrc="https://images.unsplash.com/photo-1589187151053-5ec8818e661b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"/>
      <FoodOrderForm />
    </div>
  )
}

export default App