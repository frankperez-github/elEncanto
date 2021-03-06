import React, { useEffect, useContext, useState } from 'react'
import  Image from 'next/image';
import { CartContext } from '../../context/CartContext'
import { useRouter } from 'next/router';


export const getServerSideProps = async(context) => {

  

    const res = await fetch(`https://elencantoapi.com/products/${context.params.id}`)
  
    const product = await res.json()
    
    
    return {
      props: {
        product
      }
      
}
}

    


export default function ProductDetail({product}) {
    
    
   const router = useRouter()
  const [qty, setQty] = useState(1)
  const [currentImg, setCurrentImg] = useState(0)
  const [pages, setPages] = useState([])

    useEffect(()=>{
        console.log(product)
        var pagesArr = []
      let len = product.images.length
      for (let i=0;i<len;i++)
      {
        pagesArr.push({"index":i, "isActive":i==currentImg?true:false})
      }
      setPages(pagesArr)

    },[currentImg])

   
    const Vibrate=()=>{
        var cart = document.getElementById("cart");
        cart.classList.add("Cartimg");
        var audio = document.getElementById("audio");
        audio.play();
    }

    
    const {dispatch} = useContext(CartContext)

    const addToCart = () => {
        const item = {
            product:product.id,
            name:product.name,
            qty:Number(qty),
            countInStock:Number(product.countInStock),
            price:Number(product.price),
            image:product.images.length>0?product.images[0].image:""

        }
        dispatch({type:'ADD_ITEM', payload:item})
}

    return (
        <div className="product-detail">

            <div className="LeftSideId">

                <div className="SwiperDetail">
                    <div className="arrow-div detArrow">
                        <Image onClick={()=>{ if (currentImg>0) setCurrentImg(currentImg-1)}} alt="No Image" className="arrow-pag leftarr" src="/Larrow.svg" width="45%" height="45%" />
                    </div>

                    <div className="imageProduct">
                        <Image className="ImageProductsDetails" alt="No Image" width={1000} height={900} src={product.images.length>0?product.images[currentImg].image:"/nimg.png"} />
                    </div>

                    <div className="arrow-div detArrow">
                        <Image onClick={()=>{ if (currentImg<product.images.length-1) setCurrentImg(currentImg+1)}} alt="No Image" className="arrow-pag rightarr" src="/Rarrow.svg" width="45%" height="45%" />
                    </div>
                </div>

                <div className="PaginationProductDetails">

                    {pages.map(page=> <div className="Circlepagination-div">
                        <svg className="CirclePagination" fill={page.isActive?"#F56764":"none"} height="24" stroke="#F56764" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"/></svg>
                    </div>)}
    
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

                    <button onClick={()=>{addToCart(); Vibrate()}}className=" white_button">Add to cart</button>

                    
                   

                    <button onClick={()=> {addToCart();Vibrate();router.push("/Cart")}} className="buy_button buyPhone">Buy</button>
                </div> : <h1>Out of stock</h1>}

                        
                <audio  src="/ding.mp3" id="audio"></audio>

            </div>
        </div>
    )
    }
