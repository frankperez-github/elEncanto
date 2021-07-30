import React from 'react'
import  Image from 'next/image';

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
    return (
        <div className="prodcut-detail">
            <h1>{product.name}</h1>
            <Image width={500} height={200} src={product.icon}/>
            
            <br />
            <br />
         <h1> Descripicion: {product.description}</h1>  
         <h1>Price: ${product.price}</h1>
         <h1>Quantity: {product.countInStock}</h1>
         <br />
         <br />
        </div>
    )
}
