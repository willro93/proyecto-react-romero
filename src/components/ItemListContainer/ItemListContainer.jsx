import { useEffect, useState } from "react";
import { products } from "../../productsMock";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      setTimeout(() => resolve(products), 2000);
    });
    productList.then((res) => {
      setItem(res);
    });
  }, []);
  console.log(item);

  return (
    <div>
      <ItemList item={item} />
    </div>
  );
};

export default ItemListContainer;
