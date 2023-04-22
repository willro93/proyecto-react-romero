import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Swal from 'sweetalert2'



const Cart = () => {
  const { cart, emptyCart, getTotalPrice, deleteProductById} = useContext(CartContext);

  const total = getTotalPrice();

  const empty =() => {
    Swal.fire({
      title: '¿Desea elimar los productos agregados?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      denyButtonText: `No, no eliminar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Los productos han sido eliminados con éxito', '', 'success')
        emptyCart()
      } else if (result.isDenied) {
        Swal.fire('Los productos no han sido eliminados', '', 'info')
      }
    })
  }

  return (
    <div
      style={{ width: "60%", display: "flex", justifyContent: "space-around" }}
    >
      {cart.map((element) => {
        return (
          <div key={element.id}>
            <h3>{element.name}</h3>
            <img src={element.img} style={{ width: 230 }} />
            <h3>Cantidad: {element.quantity}</h3>
            <h3>Total: ${element.price}</h3>
            <button onClick={() => deleteProductById(element.id)}>Eliminar</button>
          </div>
        );
      })}
      <h3>El total de su compra será: ${total}</h3>
      
      {cart.length > 0 && (
      <div>
        <button>Comprar</button>
        <button onClick={()=> empty()}>Vaciar carrito de compras</button>
      </div>
      )}
      
      
    </div>
  );
};

export default Cart;
