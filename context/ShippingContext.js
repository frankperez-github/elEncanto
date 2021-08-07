import { createContext, useEffect, useState } from "react";

export const ShippingContext = createContext()

const ShippingContextProvider = (props) => {
    
    const [init, setInit] = useState(false)
    const [shippingAddress, setShippingAddress] = useState({})

    useEffect(()=>{
        if (init) {
            localStorage.setItem("shippingAddress", JSON.stringify(shippingAddress))
        }
    }, [shippingAddress])

    useEffect(()=>{
        setShippingAddress(JSON.parse(localStorage.getItem("shippingAddress")) )
        setInit(true)
    },[])

    return (
        <ShippingContext.Provider value = {{shippingAddress, setShippingAddress}}>
            {props.children}
        </ShippingContext.Provider>
    )
}

export default ShippingContextProvider