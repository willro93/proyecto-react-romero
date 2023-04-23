import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { useParams } from "react-router-dom";
//import { products } from "../../productsMock";
import Swal from 'sweetalert2'
import {getDoc, collection, doc} from "firebase/firestore"
import {db} from "../../firebaseConfig"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const {addToCart, getStockById} = useContext(CartContext)

  const [productInfo, setProductInfo] = useState({})

  useEffect(()=> {
    
    const itemCollection = collection(db, "productsMock")
    const ref = doc(itemCollection, id)
    getDoc(ref)
      .then(res => {
        setProductInfo({
          ...res.data(),
          id:res.id
        })
      })
  },[id])

  //const productInfo = products.find((elemento) => elemento.id === parseInt(id));

  const onAdd = (cantidad) => {

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Se han agregado los productos con éxito',
      showConfirmButton: false,
      timer: 1500
    })

    let productos ={
      ...productInfo,
      quantity: cantidad
    }
    addToCart(productos)
  };

  let trueStock = getStockById(parseInt(id))



  return (
    <div>
      <ItemDetail productInfo={productInfo} onAdd={onAdd} trueStock={trueStock}/>
    </div>
  );
};

export default ItemDetailContainer;
