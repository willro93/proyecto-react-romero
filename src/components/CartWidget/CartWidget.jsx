import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import style from "./CartWidget.module.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
  const {cart} = useContext(CartContext);

  return (
    <Link to={"/cart"} style={{ color: "black" }}>
      <div className={style.bubblecounter}>
        <span>{cart.length  }</span>
      </div>
      <div style={{ marginTop: -15 }}>
        <TiShoppingCart size={40} />
      </div>
    </Link>
  );
};

export default CartWidget;
