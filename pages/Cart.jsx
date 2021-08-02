import { useContext } from "react"
import CartItem from "../components/CartItem"
import { CartContext } from "../context/CartContext"

const Cart = ()=> {

    const {cartItems}= useContext(CartContext)

 return (
     <div className="">
         {cartItems.length==0? <h1>Your cart is empty</h1>: <div className="cart">

            {cartItems.map(item=><CartItem key={item.product} item={item}/>)}  
         </div> }
     </div>
 )
}

export default Cart