
import ItemCount from "../ItemCount/ItemCount";
import style from "./ItemDetail.module.css"

const ItemDetail = ({productInfo, onAdd, trueStock}) => {
  return (
    <div className={style.detailStyle}>
        <h1>{productInfo.name}</h1>
        <img src={productInfo.img} alt="img_info" width={400} />
        <div>{productInfo.description}</div>
        <ItemCount stock={productInfo.stock} initial={trueStock} onAdd={onAdd} />
    </div>
  )
}

export default ItemDetail