import React from 'react'
import Image from 'next/dist/client/image'
import Link from 'next/link'

export default function ProductCard({product}) {

    

    return (

        <Link href={`products/${product.id}`}>

            <div className="product-card">
                <div className="product ProductCard">
                                        
                    <div className="ModuleImg-div">
                        <Image src={product.icon} width="42%" height="47%"/>
                    </div>
                
                
                    <p className="pkg_numb">{product.name}</p>
                    <p >{product.price}</p>
                </div>

                <button className="buy_button">Buy</button>

            </div>

        </Link>
    )
}
