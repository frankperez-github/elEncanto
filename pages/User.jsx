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
    //    getAddresses()
        }
       
       
        
    }, [])

    const getOrders = ()=> {
        

        fetch("https://elencantoapi.com/orders/", {method:"GET", headers:{"Content-Type":"application/json", Authorization:`Bearer ${user.access?user.access:user.token}`}})
        .then(res=>res.json())
        .then(data=>setOrders(data))
    
    }

    const getAddresses = ()=> {
        

        fetch("https://elencantoapi.com/shipping/", {method:"GET", headers:{"Content-Type":"application/json", Authorization:`Bearer ${user.access}`}})
        .then(res=>res.json())
        .then(data=>setAdresses(data))
       
    }

    const makeDefaultAddress = async(id) => {
       let newAddresses = []
      addresses.forEach(async(address)=>{ const res = await fetch(`http://django-env.eba-mpfqdpns.us-west-2.elasticbeanstalk.com/orders/shipping/${address.id}/`, {method:"PUT", headers:{"Content-Type":"application/json", Authorization:`Bearer ${user.access}`},body:JSON.stringify({...address, "default":!address["is_default"]})})
           const data = await res.json()
           newAddresses.push(data)
        })
        console.log(newAddresses)
    }

    return(
        <div className="user">
            <div className="Cart-title userName">
                <h2>{user.first_name ?`${user.first_name}`:user.username}</h2>
            </div>
            
            
            <div  className="orders" style={{display:"block"}}>
                {orders.length > 0 ? 
                
                    <div className="orders">

                        <div className="Cart-title ordersTitle ">
                            <h2>Your Orders</h2>
                        </div>
                        
                        
                        {orders.map(order=><OrderCard order={order} key={order.id}/>)}

                    </div> :

                    <h2 className="NoOrders">You have no orders yet</h2>
                }
            </div>
      

            <button onClick={()=>{dispatch({type:'LOGOUT'});router.push('/')}} className=" LogOut">Log out</button>

        </div>
    )
}


export default User