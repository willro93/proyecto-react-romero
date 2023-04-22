import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import Swal from 'sweetalert2'
import FormCheckout from "../FormCheckout/FormCheckout";
import { Link } from "react-router-dom";



const Cart = () => {
  const { cart, emptyCart, getTotalPrice, deleteProductById} = useContext(CartContext);

  const [showForm, setShowForm] =  useState(false)
  const [orderId, setOrderId] = useState(null)

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


  if(orderId){
    return(
      <div>
        <h2>Gracias por su compra</h2>
        <h4>Su comprobante de orden es: {orderId}</h4>
        <Link to="/">Regresar al inicio</Link>
      </div>
    )
  }

  return (
    <div>
      {
        !showForm ? (  <div
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
          
          
          {cart.length > 0 && (
          <div>
            <h3>El total de su compra será: ${total}</h3>
            <button onClick={()=>setShowForm(true)}>Continuar compra</button>
            <button onClick={()=> empty()}>Vaciar carrito de compras</button>
          </div>
          )}
        </div>
        ): <FormCheckout cart={cart} getTotalPrice={getTotalPrice} setOrderId={setOrderId} emptyCart={emptyCart}/>
      }
    
    </div>
    
  );
};

export default Cart;
