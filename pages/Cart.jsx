import { useContext } from "react"
import CartItem from "../components/CartItem"
import { CartContext } from "../context/CartContext"
import {useRouter} from 'next/router'

const Cart = ()=> {

    const router = useRouter()

    const {cartItems}= useContext(CartContext)

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
                                <p>$xx.xx</p>
                            </div>
                        </div>

                        <div className="Sub">
                            <div className="">
                                <p className="redText">$99999</p>
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