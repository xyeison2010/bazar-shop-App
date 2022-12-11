import React, { createContext, useState } from 'react';


const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart)
  const emptyCart = () => {
    setCart([]);
  };


  //
  const addItemToCart = (item, qty) => { //paso qty
    const copyCart = structuredClone(cart);
    const index = copyCart.findIndex((copy) => copy.id === item.id);
    if (index !== -1) {
      const arr = copyCart[index];
      copyCart[index] = { ...arr, quantity: arr.quantity + qty };

    } else {
      copyCart.push({ ...item, quantity: qty });//qty del  - + product detail
    }
    setCart(copyCart);
  };


  const removeItemToCart = (id) => {

    setCart((cart) => cart.filter((c) => c.id !== id))

  };
  return (
    <CartContext.Provider
      value={{ cart, addItemToCart, removeItemToCart, emptyCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
