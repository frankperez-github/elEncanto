import { useContext, useEffect, useState } from "react"
import CartItem from "../components/CartItem"
import { CartContext } from "../context/CartContext"
import {useRouter} from 'next/router'


const Cart = ()=> {

    const [subTotal, setSubTotal] = useState(0)
    const [tax, setTax] = useState(0)
    const router = useRouter()

    const {cartItems}= useContext(CartContext)

    useEffect(()=>{
        if (cartItems.length>0) { 
            setSubTotal(cartItems.map(item=>item.price*item.qty).reduce((a,b)=>a+b,0)
            )
            setTax(Number((subTotal*0.08375).toFixed(2)))
        }
        else router.push('/User')
    },[cartItems, subTotal])

    const sendOrder = async() => {
        await fetch('http://django-env.eba-mpfqdpns.us-west-2.elasticbeanstalk.com/orders/', {method:"POST", headers:{"Content-Type":"application/json", authorization: `Bearer ${user.access}`},body:JSON.stringify({"order_items":cartItems, "shipping_address":shippingAddress, "total_price":subTotal+tax})})
        dispatch({type:"CLEAN"})
        router.push("/User")
    }

 return (
     <div className="container-cart">

        <div className="YourCart">

            <div className="Cart-title">
                <h2>Your Cart</h2>
            </div>

            {cartItems.length==0 ? <h1 className="EmptyCart">Empty</h1> :
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
                            <p>${cartItems.map(item=>item.price*item.qty).reduce((a,b)=>a+b,0)
                            }</p>
                        </div>
                        
                        <div className="Sub">
                            <div className="">
                                <p>${tax}</p>
                            </div>
                        </div>

                        <div className="Sub">
                            <div className="">
                                <p className="redText">${subTotal + tax}</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>}
        
        </div>
        
        {cartItems.length==0 ? <div className="emptyButton"></div> :
            <button  onClick={()=>{router.push('/Shipping')}} className="buy_button CartBuy" style={{height:"40px", width:"70%", justifySelf:"center"}}>Proceed to checkout</button>}

     </div>
 )
}

export default Cart