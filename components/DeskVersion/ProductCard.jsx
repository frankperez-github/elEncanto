import React, { useContext } from 'react'
import Image from 'next/dist/client/image'
import Link from 'next/link'
import { CartContext } from '../../context/CartContext'

export default function ProductCard({product}) {

const {dispatch} = useContext(CartContext)

    return (

        <Link href={`product/${product.id}`}>
        <div className="product-card">
        <div className="product ProductCard">
                            
        <div className="ModuleImg-div">
            <Image src={product.icon} width="42%" height="47%"/>
        </div>
    
    
    <p className="pkg_numb">{product.name}</p>
    <p >${product.price}</p>
    </div>
<button onClick={()=>{dispatch({type:'ADD_ITEM', payload:product})}} className="buy_button">Add to cart</button>
</div>
</Link>

    )
}
