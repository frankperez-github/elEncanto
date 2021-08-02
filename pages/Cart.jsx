import { useContext } from "react"
import CartItem from "../components/CartItem"
import { CartContext } from "../context/CartContext"
import {useRouter} from 'next/router'

const Cart = ()=> {

    const router = useRouter()

    const {cartItems}= useContext(CartContext)

 return (
     <div className="">
         {cartItems.length==0? <h1>Your cart is empty</h1>: <div  style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap"}} className="cart" >

            {cartItems.map(item=><CartItem key={item.product} item={item}/>)} 

            <h1>Total Price: ${cartItems.map(item=>item.price*item.qty).reduce((a,b)=>a+b,0)
            }</h1>

            <button onClick={()=>{router.push('/Login')}} className="buy_button" style={{height:"40px", width:"70%", justifySelf:"center"}}>Proceed to checkout</button>
            </div>  }
     </div>
 )
}

export default Cart