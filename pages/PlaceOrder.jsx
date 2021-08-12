import { useRouter } from "next/router"
import { useContext } from "react"
import OrderItem from "../components/DeskVersion/OrderItem"
import { CartContext } from "../context/CartContext"
import { ShippingContext } from "../context/ShippingContext"
import { UserContext } from "../context/UserContext"

const PlaceOrder = () => {

    const {cartItems} = useContext(CartContext)
    const {shippingAddress} = useContext(ShippingContext) 
    const {user} = useContext(UserContext)
    const router = useRouter()

    const sendOrder = async() => {
        await fetch('http://localhost:8000/orders/', {method:"POST", headers:{"Content-Type":"application/json", authorization: `Bearer ${user.access}`},body:JSON.stringify({"order_items":cartItems, "shipping_address":shippingAddress, "total_price":cartItems.map(item=>item.price*item.qty).reduce((a,b)=>a+b,0)})})
        router.push("/User")
    }

    return (
        <div className="PlaceOrder">
            <div className="orderItems">
                <h1>Your order summary:</h1>
                <br />
                <h2>Items:</h2>
                {cartItems.map(item=><OrderItem key={item.product} item={item}/>)}
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

<h1>Total Price: ${cartItems.map(item=>item.price*item.qty).reduce((a,b)=>a+b,0)
}</h1>
 <button onClick={sendOrder} className="buy_button">Place Order</button>
        </div>
    )
}

export default PlaceOrder