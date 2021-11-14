import CartItem from '../CartItem'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"
 


const OrderItem = ({item}) => {

    const {cartItems}= useContext(CartContext)
    const [subTotal, setSubTotal] = useState(0)
    const [tax, setTax] = useState(0)

    useEffect(()=>{
        if (cartItems.length>0) { 
            setSubTotal(Number(cartItems.map(item=>item.price*item.qty).reduce((a,b)=>a+b,0)
            ))
            setTax(Number((subTotal*0.08375)))
        }
       
    },[cartItems, subTotal])
    

    return(

        <Link href={`/product/${item.product}`}>

            <div className="YourCart Order">
               
                <div className="ProductoCart">
                
                    <div className="Item">

                        <div className="ItemPic bigPic">
                            <Link href={`/product/${item.product}`}>
                                <Image alt="No Image" width={100} height={100} src={item.image?item.image:"/nimg.png"}/> 
                            </Link>
                        </div>
                        
                        <p className="ItemName">{item.name} </p>
                    </div>

                    <div className="Quantity">

                        <p id="qty-select" className="qty-dropdown">

                            {item.qty}

                        </p>

                    </div>

                    <div className="Price NoTrash">
                        <p>${(item.qty*item.price).toFixed(2)}</p>
                    </div>

                </div>
                
            </div>

        </Link>
    )
}

export default OrderItem