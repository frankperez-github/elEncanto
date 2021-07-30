import ProductCard from '../../components/DeskVersion/ProductCard'

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
 return (

    
    <div className="ProductsByCategory">
        { products.length>0 ?
         products.map(product=><ProductCard key = {product.id} product={product}/>):"No products found of the selected category"
        }
    </div>

 )
}

