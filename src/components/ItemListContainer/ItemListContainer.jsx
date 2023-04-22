import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { products } from "../../productsMock";
import ItemList from "./ItemList";
import BeatLoader from "react-spinners/BeatLoader";
import { green } from "@mui/material/colors";
import {db} from "../../firebaseConfig"
import {collection, getDocs, query, where} from "firebase/firestore"


const ItemListContainer = () => {
   const { categoryId } = useParams();

   const [item, setItem] = useState([]);


  //filtrado de categiras son firebase
  // const filterProducts = products.filter(
  //   (elemento) => elemento.category === categoryId
  // );

   useEffect(() => {
    const itemsCollection = collection(db, "productsMock")

    let consulta = undefined

    if(categoryId){
      const q = query(itemsCollection, where("category", "==", categoryId ))
      consulta = getDocs(q)
    } else {
      consulta = getDocs(itemsCollection)
    }

    consulta.then(res => {
      let products = res.docs.map((element)=>{
        return {
          ...element.data(),
          id: element.id
        }
      })
      setItem(products)
    })
  

  //Obtención de los productos sin categorias 
  //   const productList = new Promise((resolve, reject) => {
  //     setTimeout(() => resolve(categoryId ? filterProducts : products), 2000);
  //   });
   
  //   productList.then((res) => {
  //     setItem(res);
  //   });
    // const itemsCollection = collection(db, "productsMock")
    
  }, [categoryId])



  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {
        item.length > 0 ? (<ItemList item={item} />): 
        (
        <BeatLoader
        color={"rgb(193, 255, 148)"}
        margin={100}
        size={70}
        speedMultiplier={1}
        
      />
      )}
    </div>
  );
}

export default ItemListContainer
