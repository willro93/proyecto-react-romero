import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemList from "./ItemList";
import BeatLoader from "react-spinners/BeatLoader";
import { green } from "@mui/material/colors";


const ItemListContainer = () => {
  const { categoryId } = useParams();

  const [item, setItem] = useState([]);

  const filterProducts = products.filter(
    (elemento) => elemento.category === categoryId
  );

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      setTimeout(() => resolve(categoryId ? filterProducts : products), 2000);
    });
   
    productList.then((res) => {
      setItem(res);
    });
  }, [categoryId]);



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
};

export default ItemListContainer;
