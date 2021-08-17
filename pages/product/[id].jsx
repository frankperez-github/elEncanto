import React, { useEffect, useContext, useState } from 'react'
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

  const [qty, setQty] = useState(1)

    useEffect(()=>{
        console.log(product)
        

    },[])

    
    const {dispatch} = useContext(CartContext)

    const addToCart = () => {
        const item = {
            product:product.id,
            name:product.name,
            qty:Number(qty),
            countInStock:Number(product.countInStock),
            price:Number(product.price),
            image:product.icon

        }
        dispatch({type:'ADD_ITEM', payload:item})
}

    return (
        <div className="product-detail">
            <h1>{product.name}</h1>
            <Image width={500} height={200} src={product.icon}/>
            {product.images.map(image=><Image key={image.id} width={500} height={200} src={image.image}/>)}
            <br />
            <br />
         <h1> Descripicion: {product.description}</h1>  
         <h1>Price: ${product.price}</h1>
         {product.countInStock>0? <div className=""> <h1>Quantity: {product.countInStock}</h1>
         <label htmlFor="qty-select">Select Quantity</label>
         <select value={qty} onChange={(e)=>{setQty(e.target.value)}} name="" id="qty-select" className="qty-dropdown">
             {[...Array(product.countInStock).keys()].map(option=>{return(<option key={option+1} value={option+1}>{option+1}</option>)})}
         </select><button onClick={addToCart} className="buy_button">Add to cart</button>
         <button className="buy_button">Buy</button></div>: <h1>Out of stock</h1>}
        
         
        <br />
         <br />
        </div>
    )
    }
