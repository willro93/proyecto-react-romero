import { useState } from "react"

import{addDoc, collection, updateDoc, doc} from "firebase/firestore"

import {db} from "../../firebaseConfig"

const FormCheckout = ({cart, getTotalPrice, setOrderId, emptyCart}) => {

    const [userData, setUserData] = useState({
        name: "",
        direccion: "",
        email:"",
        telefono:"",
        tarjeta:""

    })

    const handleSubmit = (e)=>{
        e.preventDefault()
        
        let total = getTotalPrice()
        
        let order = {
            buyer: userData,
            items: cart,
            total
        }

        let orderCollection = collection(db, "orders")
        addDoc(orderCollection, order)
            .then(res => {
                setOrderId(res.id)
                emptyCart()
            })

            cart.map((product) => {
                let refDoc = doc(db, "productsMock", product.id);
                updateDoc(refDoc, { stock: product.stock - product.quantity });
              });

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre" value={userData.name} onChange={(e)=> setUserData({...userData, name: e.target.value})}/>
            <input type="text" placeholder="Direccion" value={userData.direccion} onChange={(e)=> setUserData({...userData, direccion: e.target.value})}/>
            <input type="text" placeholder="Email" value={userData.email} onChange={(e)=> setUserData({...userData, email: e.target.value})}/>
            <input type="text" placeholder="Telefono" value={userData.telefono} onChange={(e)=> setUserData({...userData, telefono: e.target.value})}/>
            <input type="text" placeholder="Tarjeta" value={userData.tarjeta} onChange={(e)=> setUserData({...userData, tarjeta: e.target.value})}/>

            <button type="submit">Comprar</button>
        </form>
    </div>
  )
}

export default FormCheckout