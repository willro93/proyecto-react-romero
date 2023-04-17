import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const Cart = () => {
  const { cart, emptyCart, getTotalPrice } = useContext(CartContext);

  const total = getTotalPrice();

  return (
    <div
      style={{ width: "60%", display: "flex", justifyContent: "space-around" }}
    >
      {cart.map((element) => {
        return (
          <div key={element.id}>
            <h3>{element.name}</h3>
            <img src={element.img} style={{ width: 250 }} />
            <h3>Cantidad: {element.quantity}</h3>
            <h3>Total: ${element.price}</h3>
          </div>
        );
      })}
      <h3>El total de su compra será: ${total}</h3>
      <button onClick={emptyCart}>Vaciar carrito de compras</button>
    </div>
  );
};

export default Cart;
