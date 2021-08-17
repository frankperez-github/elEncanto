import { useRouter } from "next/router"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import OrderItem from "./OrderItem"

const OrderCard = ({order}) => {

  const router = useRouter()
  const {user} = useContext(UserContext)

    const deleteOrder = async() => {
      await fetch(`https://elencanto-drf-api.herokuapp.com/orders/${order.id}/`, {method:"DELETE", headers:{"Content-Type": "application/json", authorization:`Bearer ${user.access}`}})
      router.reload(window.location.pathname)
      
    }

    return(
        <div className="orderCard">
                <h4>Order id: {order.id}</h4>
                <h5>Placed at : {order.created_at}</h5>
                <h5>Payment Method: {order.payment_method}</h5>
               
               { order.shipping_address.shipping_address && <h5>Address: {order.shipping_address.address}</h5> }
               <h4>Your Items:</h4>
               {order.order_items.map(item=><OrderItem key={item.id} item={item}/>)}
             <h2>Shipping Price: ${order.shipping_price}</h2>
               <h2>Total Price: ${order.total_price}</h2>
                {order.is_paid?<div><h5>`Paid at: {order.paid_at}`</h5> </div> :<button className="buy_button">Pay this Order</button>}
                <h5>{order.is_delivered?`Delivered at ${order.delivered_at}`:"Not delivered yet"}</h5>
                <button onClick= {deleteOrder} className="buy_button">Delete this order</button>
                <hr />
                <br />
               
        </div>
    )
}

export default OrderCard