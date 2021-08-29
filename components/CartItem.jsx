import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import Image from 'next/image'
import Link from 'next/link'

const CartItem = ({item}) => {
    
    const {dispatch} = useContext(CartContext)

    return(
        
        <div className="cartItem">
            
             <h1>{item.name} </h1>
             
             <Link href={`/product/${item.product}`}>
              <Image width={100} height={100} src={item.image}/> 
              </Link>

            <h2>Quantity: 

                <select value={item.qty} onChange={(e)=>{dispatch({type:"ADD_ITEM", payload:{...item, qty:e.target.value}})}} name="" id="qty-select" className="qty-dropdown">

                    {[...Array(item.countInStock).keys()].map(option=>{return(<option key={option+1} value={option+1}>{option+1}</option>)})}

                </select>
         
            </h2>
             <h2>Price: ${item.qty*item.price}</h2>
             
             <button className="buy_button" onClick={()=>{dispatch({type:"REMOVE_ITEM", payload:item})}}>Remove</button>
            
     
        </div>
         
    )
}

export default CartItem