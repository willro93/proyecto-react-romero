
import Item from "./Item";
import style from "./ItemList.module.css";

const ItemList = ({ item }) => {
  return (
    <div className={style.ItemListStyle}>
      {item.map((elemento) => (
        <Item key={elemento.id} elemento={elemento} />
      ))}
    </div>
  );
};

export default ItemList;
