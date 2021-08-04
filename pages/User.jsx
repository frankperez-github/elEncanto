import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import {useRouter } from "next/router"
import OrderCard from "../components/DeskVersion/OrderCard"

const User = () => {

    const {user, dispatch} = useContext(UserContext)
    const [orders, setOrders] = useState([])
    const router = useRouter()

    useEffect(()=>{
        if (!user.username) {
            router.push("Login")
        }
        else {
        getOrders()
        
        }
        console.log(orders)
       
        
    }, [user])

    const getOrders = ()=> {
        console.log(user)

        fetch("https://elencanto-drf-api.herokuapp.com/orders/", {method:"GET", headers:{"Content-Type":"application/json", Authorization:`Bearer ${user.access}`}})
        .then(res=>res.json())
        .then(data=>setOrders(data))
        console.log(orders)
    }

    return(
        <div className="user">
            <h1>Welcome {user.username}</h1>
        {orders.length>0? 
          <div className="orders"><h1>This are your orders:</h1>
           {orders.map(order=><OrderCard order={order} key={order.id}/>)}
                </div> :
                 <h1>You have no orders yet</h1>
        }

<button onClick={()=>{dispatch({type:'LOGOUT'});router.push('/')}} className="buy_button">Log out</button>

        </div>
    )
}


export default User