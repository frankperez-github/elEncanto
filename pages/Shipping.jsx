import { useRouter } from "next/router"
import Image from 'next/image';
import { useContext, useEffect, useState } from "react"
import { ShippingContext } from "../context/ShippingContext"
import { UserContext } from "../context/UserContext"

const Shipping = () => {

    const {user} = useContext(UserContext)
    const {shippingAddress, setShippingAddress} = useContext(ShippingContext)
    const router = useRouter()
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [save, setSave] = useState(false)
    const [defaultAdresss, setDefaultAddress] = useState(false)
    
    useEffect(()=>{
        if (!user.username) {
        router.push("Login")
        }
        if (shippingAddress) {
            setStreet(shippingAddress.street)
            setCity(shippingAddress.city)
            setZipcode(shippingAddress.zipcode)
            setState(shippingAddress.state)
        }
        
    },[])

    const handleSubmit = async(e) => {
        e.preventDefault()
        setShippingAddress({
            street, city, state, zipcode
        })
        if (save) {
             await fetch("http://django-env.eba-mpfqdpns.us-west-2.elasticbeanstalk.com/orders/shipping/", {method:"POST", headers:{"Content-Type":"application/json", authorization: `Bearer ${user.access}`}, body:JSON.stringify({...shippingAddress, "default":defaultAdresss})})
        }
      
        router.push("/PlaceOrder")
    }
    return(

        <div className="shipping User container-shipping">

            <div className="Step-div">
                <Image src="/Step1.svg" width="600%" height="80%" />
            </div>

            <form action="POST" onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", alignContent:"center"}}>
             <input placeholder="Street" type="text" value={street} onChange={e=>setStreet(e.target.value)}/>
             <input placeholder="City" type="text" value={city} onChange={e=>setCity(e.target.value)}/>
             <select name="state" id="state" value={state} onChange={(e)=>{setState(e.target.value)}}>
                 			<option value="---">---</option><option value="Alabama">Alabama</option><option value="Alaska">Alaska</option><option value="Arizona">Arizona</option><option value="Arkansas">Arkansas</option><option value="California">California</option><option value="Colorado">Colorado</option><option value="Connecticut">Connecticut</option><option value="Delaware">Delaware</option><option value="District of Columbia">District of Columbia</option><option value="Florida">Florida</option><option value="Georgia">Georgia</option><option value="Guam">Guam</option><option value="Hawaii">Hawaii</option><option value="Idaho">Idaho</option><option value="Illinois">Illinois</option><option value="Indiana">Indiana</option><option value="Iowa">Iowa</option><option value="Kansas">Kansas</option><option value="Kentucky">Kentucky</option><option value="Louisiana">Louisiana</option><option value="Maine">Maine</option><option value="Maryland">Maryland</option><option value="Massachusetts">Massachusetts</option><option value="Michigan">Michigan</option><option value="Minnesota">Minnesota</option><option value="Mississippi">Mississippi</option><option value="Missouri">Missouri</option><option value="Montana">Montana</option><option value="Nebraska">Nebraska</option><option value="Nevada">Nevada</option><option value="New Hampshire">New Hampshire</option><option value="New Jersey">New Jersey</option><option value="New Mexico">New Mexico</option><option value="New York">New York</option><option value="North Carolina">North Carolina</option><option value="North Dakota">North Dakota</option><option value="Northern Marianas Islands">Northern Marianas Islands</option><option value="Ohio">Ohio</option><option value="Oklahoma">Oklahoma</option><option value="Oregon">Oregon</option><option value="Pennsylvania">Pennsylvania</option><option value="Puerto Rico">Puerto Rico</option><option value="Rhode Island">Rhode Island</option><option value="South Carolina">South Carolina</option><option value="South Dakota">South Dakota</option><option value="Tennessee">Tennessee</option><option value="Texas">Texas</option><option value="Utah">Utah</option><option value="Vermont">Vermont</option><option value="Virginia">Virginia</option><option value="Virgin Islands">Virgin Islands</option><option value="Washington">Washington</option><option value="West Virginia">West Virginia</option><option value="Wisconsin">Wisconsin</option><option value="Wyoming">Wyoming</option>
                             </select>
           
             <input placeholder="Zipcode" type="text" value={zipcode} onChange={e=>setZipcode(e.target.value)}/>
                
                    <div className="dfltAddress">
                    <input className="checkBox" type="checkbox" name="" id="" checked={defaultAdresss} onChange={()=>setDefaultAddress(!defaultAdresss)}/>  Make default address? 
                    </div>
             <button style={{width:"70%",alignSelf:"center"}} className="submit_button" type="submit">
                Submit
            </button>
            </form>
        </div>
    )
}

export default Shipping