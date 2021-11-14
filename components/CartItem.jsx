import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import Image from 'next/image'
import Link from 'next/link'

const CartItem = ({item}) => {
    
    const {dispatch} = useContext(CartContext)

    return(
        
        <div className="cartItem">

            <div className="ProductoCart">
                
                <div className="Item">

                    <div className="ItemPic">
                        <Link href={`/product/${item.product}`}>
                            <Image alt="No Image" width={100} height={100} src={item.image?item.image:"/nimg.png"}/> 
                        </Link>
                    </div>
                    

                    <p className="ItemName">{item.name} </p>

                </div>

                <div className="Quantity">
                    <select value={item.qty} onChange={(e)=>{dispatch({type:"ADD_ITEM", payload:{...item, qty:e.target.value}})}} name="" id="qty-select" className="qty-dropdown">

                        {[...Array(item.countInStock).keys()].map(option=>{return(<option key={option+1} value={option+1}>{option+1}</option>)})}

                    </select>

                    
                    
                </div>

                <div className="Price">
                    <p>${(item.qty*item.price).toFixed(2)}</p>
                </div>

                <div className="trash">
                    <Image alt="No Image" src="/trash.svg" width="100%" height="100%" onClick={()=>{dispatch({type:"REMOVE_ITEM", payload:item})}}/>
                </div>
                
                
                
            </div>

           
        </div>
         
    )
}

export default CartItem