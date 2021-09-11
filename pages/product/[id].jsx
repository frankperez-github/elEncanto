import React, { useEffect, useContext, useState } from 'react'
import  Image from 'next/image';
import { CartContext } from '../../context/CartContext'


export const getStaticProps = async(context) => {

    const res = await fetch(`http://django-env.eba-mpfqdpns.us-west-2.elasticbeanstalk.com/products/${context.params.id}`)
  
    const product = await res.json()
    
    
    return {
      props: {
        product
      }
      
}
}

export const getStaticPaths = async() => {

    const res = await fetch('http://django-env.eba-mpfqdpns.us-west-2.elasticbeanstalk.com//products')
  
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

            <div className="LeftSideId">

                <div className="SwiperDetail">
                    <div className="arrow-div detArrow">
                        <Image className="arrow-pag leftarr" src="/Larrow.svg" width="45%" height="45%" />
                    </div>

                    <div className="imageProduct">
                        <Image width={1000} height={900} src={product.icon} />
                    </div>

                    <div className="arrow-div detArrow">
                        <Image className="arrow-pag rightarr" src="/Rarrow.svg" width="45%" height="45%" />
                    </div>
                </div>

                <div className="imageProduct">
                    {product.images.map(image=> <Image key={image.id} width={600} height={450} src={image.image} />)}
                </div>
            </div>

            <div className="RightSideId">
                
                <div className="PriceProd">
                    <p >${product.price}</p>
                </div>
                
                <div className="NameProd">
                    <p>{product.name}</p>
                </div>
                
                <div className="DescrProd">
                    <p>{product.description}</p>
                </div>
                 

                {product.countInStock>0? 
                <div className="InfoProd"> 

                    <div className="Stock">
                        <select value={qty} onChange={(e)=>{setQty(e.target.value)}} name="" id="qty-select" className="qty-dropdown">

                        {[...Array(product.countInStock).keys()].map(option=>{return(<option key={option+1} value={option+1}>{option+1}</option>)})}

                        </select>

                        <p>*{product.countInStock} in Stock</p>
                    </div>

                    <label htmlFor="qty-select"></label>

                    <button onClick={addToCart} className=" white_button">Add to cart</button>

                    <button className="buy_button buyPhone">Buy</button>
                </div> : <h1>Out of stock</h1>}

            </div>
        </div>
    )
    }
