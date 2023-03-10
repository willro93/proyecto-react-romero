import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to={"/cart"} style={{color:"black"}}>
      <div style={{ marginTop: 15 }}>
        <TiShoppingCart size={40} />
      </div>
    </Link>
  );
};

export default CartWidget;
