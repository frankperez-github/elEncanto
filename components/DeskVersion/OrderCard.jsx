import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/UserContext"
import { PayPalButton } from "react-paypal-button-v2"
import OrderItem from "./OrderItem"
import { CartContext } from "../../context/CartContext"

const OrderCard = ({order}) => {

  var displayPayPal = "none"
  var displaySustitute="block"

  const router = useRouter()
  const {user} = useContext(UserContext)
  const [subTotal, setSubTotal] = useState(0)
  const [tax, setTax] = useState(0)
  const [sdk, setSdk] = useState(false)
  const [success, setSuccess] = useState(false)
  const [paying, setPaying] = useState(false)

    const PayPal_button = () =>{
      displayPayPal = "block"
      displaySustitute="none"
    }

    const deleteOrder = async() => {
      await fetch(`https://elencantoapi.com/orders/${order.id}/`, {method:"DELETE", headers:{"Content-Type": "application/json", authorization:`Bearer ${user.access?user.access:user.token}`}, })
      router.reload(window.location.pathname)
      
    }
    const {cartItems}= useContext(CartContext)

    useEffect(()=>{
        if (cartItems.length>0) { 
            setSubTotal(Number(cartItems.map(item=>item.price*item.qty).reduce((a,b)=>a+b,0)
            ))
            setTax(Number((subTotal*0.08375)))
        }
       
    },[cartItems, subTotal])

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

  const res = await fetch(`https://elencantoapi.com//orders/${order.id}/`, {method:"PUT", headers:{"Content-Type": "application/json", authorization:`Bearer ${user.access}`},body:JSON.stringify({"action":"pay"})})
  const data = await res.json()
  console.log(data)
  router.reload(window.location.pathname)
}



    useEffect(()=>{
      if (!order.is_paid && order.is_approved)
        
      {
        if (!window.script) addPaypalScript()
        else setSdk(true)
      }
      if (success) successPaymentHandler()
      
    },[user, sdk])

    return(
        <div className="orderCard" style={order.is_approved ?{borderColor:"#54cf49", borderWidth:"2px"}:{borderColor:"gray"}}>

          <p>Order Id: {order.id}</p>
          <p>Placed: {order.created_at}</p>
          <br/>
          <h3 className="Sumary">Order Sumary: </h3>

          <div className="YourCart Order-Card cart">

            <div className="Caracts">
                <p className="ItemP">Items</p>
                <p className="QuantityP">Quantity</p>
                <p className="PriceP">Price</p>
                <p className="TrashP"></p>
            </div>
            
            <div className="cart">

              {order.order_items.map(item=><OrderItem key={item.id} item={item}/>)} 
            
            </div>

            <div className="TotalSect totalsub">

                      <div className="Subts">
                          <div className="">
                              <p>SubTotal:</p>
                          </div>
                          <div className="">
                              <p>Shipping:</p>
                          </div>
                          <div className="">
                              <p className="redText">Total:</p>
                          </div>
                      </div>

                      <div className="Total">
                          <div className="Sub">
                              <p>${order.total_price}</p>
                          </div>
                          
                          <div className="Sub">
                              <div className="">
                                  <p>${order.shipping_price}</p>
                              </div>
                          </div>

                          <div className="Sub">
                              <div className="">{order.shipping_price ? 

                              <p className="redText">${order.total_price + order.shipping_price}</p> : 

                              <p className="redText">${order.total_price}</p>}
                                
                                  
                              </div>
                          </div>
                          
                      </div>
                  </div>

          </div>
          

                
            {!order.is_approved? <p className="IfApproved">Your order will be approved soon. Wait for an email from <br/>
            <a style={{color:"#F56764"}}>elencantoliquidation@gmail.com</a> </p>:
            
            <div className="OrderState">
              <h3 className="paid">{ order.is_paid?" Your order is paid" : " "}</h3>
              
                {order.is_paid ?
                <div>
                  <h3>`Paid at: {order.paid_at}`</h3> 

                  <h3>{order.is_delivered?`Delivered at ${order.delivered_at}`:"Not delivered yet"}</h3>
                  
                </div> :
                <div className="PayPal-div">
                  <button style={{display:paying?"none":""}} onClick= {()=>setPaying(true)} className="  buy_button cancelButton">Pay this order</button>
              
                  <div style={{display:paying?"block":"none"}} className=""> 
                  
                    {sdk && <PayPalButton className=" buy_button cancelButton" amount={order.total_price} onSuccess={()=>{
                
                      alert("Payed")
                      setSdk(false)
                      setSuccess(true)

                    }}/>} 
                  </div>
                </div> 
            }

            </div>}


            <button onClick= {deleteOrder} className="buy_button cancelButton">Cancel this order</button>
               
        </div>
    )
}

export default OrderCard