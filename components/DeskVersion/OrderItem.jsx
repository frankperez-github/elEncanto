
import Image from 'next/image'
import Link from 'next/link'
 


const OrderItem = ({item}) => {
    

    return(
        <Link href={`/product/${item.product}`}>
        <div className="OrderItem">
             <h1>{item.name} </h1>
             <Image width={100} height={100} src={item.image}/>
             <h2>Quantity: {item.qty}
          </h2>
             <h2>Price: ${item.qty*item.price}</h2>
        
        </div>
        </Link>
    )
}

export default OrderItem