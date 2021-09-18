import Image from 'next/image'
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import CartItem from "../components/CartItem"
import Animation from '../components/DeskVersion/Animation'
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
            setSubTotal(Number(cartItems.map(item=>item.price*item.qty).reduce((a,b)=>a+b,0))
            )
            setTax(Number((subTotal*0.08375).toFixed(2)))
        }
       
    },[cartItems, subTotal])

 

    const sendOrder = async() => {
        
       await fetch('https://elencantoapi.com/orders/', {method:"POST", headers:{"Content-Type":"application/json", authorization: `Bearer ${user.access?user.access:user.token}`},body:JSON.stringify({"order_items":cartItems, "shipping_address":shippingAddress,
        "total_price":Number(subTotal+tax)})})
        dispatch({type:"CLEAN"})
        setTimeout(()=>{router.push("/User")}, 7000)
    }

    const showAnim =() =>{

        
        document.getElementById('Animation').style.display="block";
        document.getElementById('Place_Order').style.display="none";
        
    }
    
    return (
        <div >

            <div  id="Place_Order" className="container-cart">
                
                <div className="YourCart">

                    <div className="Step-div2">
                        <Image alt="No Image" src="/Step2.svg" width="600%" height="40%" />
                    </div>

                    <div className="Cart-title OrderTitle">
                        <h2>Your order summary:</h2>
                    </div>
                
                    <div className="CartSection">
                    
                    <div className="">
                    
                        <div className="Caracts">
                            <p className="ItemP">Items</p>
                            <p className="QuantityP">Quantity</p>
                            <p className="PriceP">Price</p>
                            <p className="TrashP"></p>
                        </div>


                        <div  style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap"}} className="cart" >

                            {cartItems.map(item=><CartItem key={item.product} item={item}/>)} 
                        
                        </div>

                        <div className="TotalSect">

                            <div className="Subts">
                                <div className="">
                                    <p>SubTotal:</p>
                                </div>
                                <div className="">
                                    <p>Taxes:</p>
                                </div>
                                <div className="">
                                    <p className="redText">Total:</p>
                                </div>
                            </div>

                            <div className="Total">
                                <div className="Sub">
                                    <p>${cartItems.map(item=>item.price*item.qty).reduce((a,b)=>a+b,0).toFixed(2)
                                    }</p>
                                </div>
                                
                                <div className="Sub">
                                    <div className="">
                                        <p>${tax}</p>
                                    </div>
                                </div>

                                <div className="Sub">
                                    <div className="">
                                        <p className="redText">${(subTotal + tax).toFixed(2)}</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <div className="ShippingAddress">
                    <h2>Shipping Address:</h2>
                    <p>{shippingAddress.street}, {shippingAddress.city}, {shippingAddress.zipcode}</p> 
                    <button className="buy_button modify_button" onClick={()=>{router.push("/Shipping")}}>
                        Modify
                    </button>
                </div>
                

                <button onClick={()=>{showAnim();sendOrder()}} className="buy_button OrderButton">Place Order</button>

                <div className="PlaceOrderP">
                    <p>( You don't need to pay your order until it is approved )</p>
                </div>
                
                

            </div>

            <Animation />

        </div>
        
            )
}

export default PlaceOrder