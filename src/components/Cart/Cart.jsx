import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const Cart = () => {

  const {cart} = useContext(CartContext)

  return (
  <div>
    {
      cart.map((element)=>{
        return(
          <div>
            <h2>{element.name}</h2>
          </div>
        )
      })
    }
  </div>
    )
};

export default Cart;
