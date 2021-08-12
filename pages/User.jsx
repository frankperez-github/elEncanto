import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import {useRouter } from "next/router"
import OrderCard from "../components/DeskVersion/OrderCard"
import AddressCard from "../components/DeskVersion/AddressCard"

const User = () => {

    const {user, dispatch} = useContext(UserContext)
    const [orders, setOrders] = useState([])
    const [addresses, setAdresses] = useState([])
    const router = useRouter()
    const [showOrders, setShowOrders] = useState(false)
    const [showAddresses, setShowAddresses] = useState(false)

    useEffect(()=>{
        if (!user.username) {
            router.push("Login")
        }
        else {
        getOrders()
        getAddresses()
        }
       
       
        
    }, [])

    const getOrders = ()=> {
        

        fetch("https://elencanto-drf-api.herokuapp.com/orders/", {method:"GET", headers:{"Content-Type":"application/json", Authorization:`Bearer ${user.access}`}})
        .then(res=>res.json())
        .then(data=>setOrders(data))
       
    }

    const getAddresses = ()=> {
        

        fetch("https://elencanto-drf-api.herokuapp.com/orders/shipping/", {method:"GET", headers:{"Content-Type":"application/json", Authorization:`Bearer ${user.access}`}})
        .then(res=>res.json())
        .then(data=>setAdresses(data))
       
    }

    const makeDefaultAddress = async(id) => {
       let newAddresses = []
      addresses.forEach(async(address)=>{ const res = await fetch(`https://elencanto-drf-api.herokuapp.com/orders/shipping/${address.id}/`, {method:"PUT", headers:{"Content-Type":"application/json", Authorization:`Bearer ${user.access}`},body:JSON.stringify({...address, "default":!address["is_default"]})})
           const data = await res.json()
           newAddresses.push(data)
        })
        console.log(newAddresses)
    }

    return(
        <div className="user">
            
            <h1>Welcome {user.first_name && user.last_name?`${user.first_name} ${user.last_name}`:user.username}</h1>
            <button onClick={()=>{setShowOrders(!showOrders)}} className="buy_button">{showOrders?"Hide your orders":"See your orders"}</button>
            
            <div  className="orders" style={{display:showOrders?"block":"none"}}>
        {orders.length>0? 
          <div className="orders"><h1>This are your orders:</h1>
          <br />
           {orders.map(order=><OrderCard order={order} key={order.id}/>)}
                </div> :
                 <h1>You have no orders yet</h1>
        }
        </div>
      {/*   <button onClick={()=>{setShowAddresses(!showAddresses)}} className="buy_button">{showAddresses?"Hide addresses":"See addresses"}</button>
    <div style={{display:showAddresses?"block":"none"}} className="addresses">
        <h2>Your addresses:</h2>
        <br />
        <div className="">
        {addresses.map(address=>{return <AddressCard makeDefault={makeDefaultAddress} address={address} key={address.id}/>})}
        </div>
    </div> */}

<button onClick={()=>{dispatch({type:'LOGOUT'});router.push('/')}} className="buy_button">Log out</button>

        </div>
    )
}


export default User