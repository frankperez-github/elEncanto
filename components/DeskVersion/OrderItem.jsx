
import Image from 'next/image'

const OrderItem = ({item}) => {
    

    return(
        <div className="OrderItem">
             <h1>{item.name} </h1>
             <Image width={100} height={100} src={item.image}/>
             <h2>Quantity: {item.qty}
          </h2>
             <h2>Price: ${item.qty*item.price}</h2>
        
        </div>
    )
}

export default OrderItem