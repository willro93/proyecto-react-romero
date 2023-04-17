import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Función para Agregar al carrito
  const addToCart = (producto) => {
    let duplicate = counterCart(producto.id);

    if (duplicate) {
      let newCart = cart.map((elemento) => {
        if (elemento.id === producto.id) {
          return {
            ...elemento,
            quantity: elemento.quantity + producto.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, producto]);
    }
  };

  //Función para Averiguar si un producto ya está en el carrito de compras
  const counterCart = (id) => {
    return cart.some((elemento) => elemento.id === id);
  };

  //Función para Vaciar el carrito
  const emptyCart = () => {
    setCart([]);
  };

  //Función para el total del carrito
  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity * elemento.price
    }, 0);

    return total;
  };
  //Función que detalla los elementos totales del carrito (sea el mismo producto o no)
  const getTotalProduct=() =>{
    const total = cart.reduce((acc, cur)=>{
      return(
        acc+cur.quantity
      )
    }, 0)

    return total

  }

  let data = {
    cart,
    addToCart,
    emptyCart,
    getTotalPrice,
    getTotalProduct
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
