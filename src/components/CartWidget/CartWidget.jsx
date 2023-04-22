import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import style from "./CartWidget.module.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
  const {getTotalProduct} = useContext(CartContext);

  const total=getTotalProduct()

  return (
    <Link to={"/cart"} style={{ color: "black" }}>
      <div className={style.bubbleCounter}>
        <span>{total}</span>
      </div>
      <div style={{ marginTop: -15 }}>
        <TiShoppingCart size={40} />
      </div>
    </Link>
  );
};

export default CartWidget;
