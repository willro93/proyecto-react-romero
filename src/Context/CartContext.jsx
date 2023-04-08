import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (producto)=>{
    setCart([...cart, producto])
  }

  let data = {
    cart: cart,
    addToCart: addToCart,
  };

  return (
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
  ) 
};

export default CartContextProvider;
