import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import OrderItem from "../components/DeskVersion/OrderItem"
import { CartContext } from "../context/CartContext"
import { ShippingContext } from "../context/ShippingContext"
import { UserContext } from "../context/UserContext"

const PlaceOrder = () => {

    const {cartItems, dispatch} = useContext(CartContext)
    const {shippingAddress} = useContext(ShippingContext) 
    const {user} = useContext(UserContext)
    const [subTotal, setSubTotal] = useState(0)
    const [tax, setTax] = useState(0)
    const router = useRouter()

    useEffect(()=>{
        if (cartItems.length>0) { 
            setSubTotal(cartItems.map(item=>item.price*item.qty).reduce((a,b)=>a+b,0)
            )
            setTax(Number((subTotal*0.08375).toFixed(2)))
        }
        else router.push('/User')
    },[cartItems, subTotal])

    const sendOrder = async() => {
        await fetch('https://elencanto-drf-api.herokuapp.com/orders/', {method:"POST", headers:{"Content-Type":"application/json", authorization: `Bearer ${user.access}`},body:JSON.stringify({"order_items":cartItems, "shipping_address":shippingAddress, "total_price":subTotal+tax})})
        dispatch({type:"CLEAN"})
        router.push("/User")
    }

    return (
        <div className="PlaceOrder">
            <div className="orderItems">
                <h1>Your order summary:</h1>
                <br />
                <h2>Items:</h2>
                {cartItems.length>0?cartItems.map(item=><OrderItem key={item.product} item={item}/>):<h1>Y</h1>}
            </div>
           
            <br />
            <div className="ShippingAddress">
                <h2>Shipping Address:</h2>
                <address>{shippingAddress.street}, {shippingAddress.city}, {shippingAddress.zipcode}</address> 
                <button className="buy_button" onClick={()=>{router.push("/Shipping")}}>
                    Modify
                </button>
            </div>
            <br />

<h2>Subtotal: ${subTotal}</h2>
<h2>Tax: ${tax}</h2>
<h1>Total Price: ${subTotal+tax}</h1>
 <button onClick={sendOrder} className="buy_button">Place Order</button>
 <h2>(You don't need to pay your order until it is approved)</h2>
        </div>
    )
}

export default PlaceOrder