import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemList from "./ItemList";

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
  console.log(item);

  return (
    <div>
      <ItemList item={item} />
    </div>
  );
};

export default ItemListContainer;
