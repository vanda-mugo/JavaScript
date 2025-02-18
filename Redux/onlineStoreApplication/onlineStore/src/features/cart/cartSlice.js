export const addItem = (itemToAdd) => {
    return {
      type: 'cart/addItem',
      payload: itemToAdd,
    };
  };
  
  // Create your changeItemQuantity action creator here.
  export const changeItemQuantity = (name, newQuantity) => {
    return {
      type: 'cart/changeItemQuantity',
      payload:{
        name, 
        newQuantity
      }
    }
  }
  
  
  const initialCart = {};
  export const cartReducer = (cart = initialCart, action) => {
    switch (action.type) {
      case 'cart/addItem': {
        const { name, price } = action.payload;
  
        // if the item already exists, increase the quantity by 1, otherwise set it to 1
        const quantity = cart[name] ? cart[name].quantity + 1 : 1;
        const newItem = { price, quantity };
  
        // Add the new item to the cart (or replace it if it existed already)
        return { 
          ...cart, 
          [name]: newItem 
        };
      }
      case 'cart/changeItemQuantity': {
        const { name, newQuantity } = action.payload;
        /**
         *  cart: {
            'Hat': { price: 15.99, quantity: 0 },
            'T-Shirt': { price: 15.99, quantity: 2 },
            'Hoodie': { price: 18.99, quantity: 1 },
          }
          * now when you do itemToUpdate = cart[name], this means that 
          * if the name is Hat then itemToUpdate will be {price:15.99, quantity:0}
          * 
         */
        // Create a copy of itemToUpdate and update the quantity prop.
        const itemToUpdate = cart[name];
        const updatedItem = {
          ...itemToUpdate,
          quantity: newQuantity
        };
        // Return a copy of the cart with the updatedItem included.
        return {
          ...cart,
          //note by we are having this in square brackets to show that the computed
          // name value is updated. without would mean that we are creating a name 
          // with the updated value within the cart rather than the computed name 
          [name]: updatedItem
        };
      }
      default: {
        return cart;
      }
    }
  };