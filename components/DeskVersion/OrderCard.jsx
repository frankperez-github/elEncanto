import { useRouter } from "next/router"
import { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext"
import OrderItem from "./OrderItem"

const OrderCard = ({order}) => {

  const router = useRouter()
  const {user} = useContext(UserContext)
  const [sdk, setSdk] = useState(false)

    const deleteOrder = async() => {
      await fetch(`https://elencanto-drf-api.herokuapp.com/orders/${order.id}/`, {method:"DELETE", headers:{"Content-Type": "application/json", authorization:`Bearer ${user.access}`}})
      router.reload(window.location.pathname)
      
    }

const addPaypalScript = ()=>{
  const script = document.createElement("script")
  script.type = 'text/javascript'
  script.src = "https://www.paypal.com/sdk/js? client-id=AYfvlWFE-FyeSm2NBubForDud-H-5OAv98pe4_Y7-mqNSvbukVej_qzzcnumwu4IGf1gs7uASF2km1dp" 
  script.async = true
  script.onload = () => {
    setSdk(true)
  }
  document.body.appendChild(script)
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