import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/UserContext"
import { PayPalButton } from "react-paypal-button-v2"
import OrderItem from "./OrderItem"

const OrderCard = ({order}) => {

  const router = useRouter()
  const {user} = useContext(UserContext)
  const [sdk, setSdk] = useState(false)

    const deleteOrder = async() => {
      await fetch(`https://elencanto-drf-api.herokuapp.com/orders/${order.id}/`, {method:"DELETE", headers:{"Content-Type": "application/json", authorization:`Bearer ${user.access}`}, })
      router.reload(window.location.pathname)
      
    }

const addPaypalScript = ()=>{
  const script = document.createElement("script")
  script.type = 'text/javascript'
  script.src = "https://www.paypal.com/sdk/js?client-id=AYfvlWFE-FyeSm2NBubForDud-H-5OAv98pe4_Y7-mqNSvbukVej_qzzcnumwu4IGf1gs7uASF2km1dp"
  script.async = true
  script.onload = () => {
    setSdk(true)
  }
  document.body.appendChild(script)
}

const successPaymentHandler = async(paymentResult)  => {


}



useEffect(()=>{
  if (!order.is_paid && order.is_approved)
    
  {
    if (!window.script) addPaypalScript()
    else setSdk(true)
  }
  
},[user])
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
                
                
                {!order.is_approved? <h1>Your order will be approved soon. Wait for an email from <a style={{color:"#FF524F", textDecoration:"underline"}}>elencantoliquidation@gmail.com</a> </h1>:
                <div>
                  <h1>Your order is approved</h1>
                   {order.is_paid?<div><h5>`Paid at: {order.paid_at}`</h5> <h5>{order.is_delivered?`Delivered at ${order.delivered_at}`:"Not delivered yet"}</h5></div> :
                 <div> <h1>Pay your order</h1>{sdk && <PayPalButton amount={order.total_price} onSuccess={async()=>{
                  
                  const res  = await fetch(`https://elencanto-drf-api.herokuapp.com/orders/${order.id}/`, {method:"PUT", headers:{"Content-Type": "application/json", authorization:`Bearer ${user.access}`},body:{"action":"pay"}})
                  const data = await(res.json())
                  console.log(data)
                }}/>} </div> 
    }
                </div>}
                <button onClick= {deleteOrder} className="buy_button">Cancel this order</button>
                <hr />
                <br />
               
        </div>
    )
}

export default OrderCard