import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const {addToCart} = useContext(CartContext)

  const productInfo = products.find((elemento) => elemento.id === parseInt(id));

  const onAdd = (cantidad) => {

    let productos ={
      ...productInfo,
      quantity: cantidad
    }
    addToCart(productos)
  };

  return (
    <div>
      <h1>{productInfo.name}</h1>
      <img src={productInfo.img} alt="" />
      <div>{productInfo.description}</div>
      <ItemCount stock={productInfo.stock} initial={1} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;
