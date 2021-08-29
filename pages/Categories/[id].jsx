import ProductCard from '../../components/DeskVersion/ProductCard'
import Image from 'next/image'
import { useEffect } from 'react'

export const getStaticProps = async(context) => {
    const res  = await fetch(`https://elencanto-drf-api.herokuapp.com/products/categories/${context.params.id}`)
    const products = await res.json()

    return {
        props : {
            products
        }
    }
}

export const getStaticPaths = async() => {
    const res  = await fetch(`https://elencanto-drf-api.herokuapp.com/products/categories`)
    const products = await res.json()
    console.log(products)
    const paths = products.map(product=>{return {params:{id:product.id.toString()}}})

    return {
        paths,
        fallback:false
    }
}


export default function ProductsByCategory ({products}) {
    
    useEffect(()=>{
        console.log(products);
    }, [])

    return (


    <div className="Pallets-divCateg">


        

        <div className="CategoryName-div">
            
            <h2>Kitchen</h2>
            
        </div>

        <div className=" Right_side ">
            { products.length>0 ?
            products.map(product=><ProductCard  key = {product.id} product={product}/>): <h2>"No products found of the selected category"</h2>}
            
            

            <div className="pagination-bar ">
                
                <div className="arrow-div">
                    <Image className="arrow-pag leftarr" src="/Larrow.svg" width="45%" height="45%" />
                </div>

                    <p>1</p>
                    <p>2</p>
                    <p className="selectedNumber">3</p>
                    <p>4</p>
                    <p>5</p>

                <div className="arrow-div">
                    <Image className="arrow-pag rightarr" src="/Rarrow.svg" width="45%" height="45%" />
                </div>

                </div>  
                  
        </div>
    </div>

 )
}
