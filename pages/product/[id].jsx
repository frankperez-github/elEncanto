import React, { useEffect, useContext } from 'react'
import  Image from 'next/image';
import { CartContext } from '../../context/CartContext'


export const getStaticProps = async(context) => {

    const res = await fetch(`https://elencanto-drf-api.herokuapp.com/products/${context.params.id}`)
  
    const product = await res.json()
    
    
    return {
      props: {
        product
      }
      
}
}

export const getStaticPaths = async() => {

    const res = await fetch('https://elencanto-drf-api.herokuapp.com/products')
  
    const products = await res.json()
    const paths =  products.map(product=>{return{params:{id:product.id.toString()}}})
  
    return {
     paths,
     fallback:false
}
}


export default function ProductDetail({product}) {

    useEffect(()=>{
        console.log(product)
    })
    const {dispatch} = useContext(CartContext)



    return (
        <div className="product-detail">
            <h1>{product.name}</h1>
            <Image width={500} height={200} src={product.icon}/>
            {product.images.map(image=><Image key={image.id} width={500} height={200} src={image.image}/>)}
            <br />
            <br />
         <h1> Descripicion: {product.description}</h1>  
         <h1>Price: ${product.price}</h1>
         <h1>Quantity: {product.countInStock}</h1>
         <button onClick={()=>{dispatch({type:'ADD_ITEM', payload:product})}} className="buy_button">Add to cart</button>
         <button>Buy</button>
        <br />
         <br />
        </div>
    )
}
