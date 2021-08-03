import { createContext, useEffect, useReducer, useState } from "react";
import { CartItemReducer } from "./reducers/CartItemsReducer";

export const CartContext = createContext()


const CartContextProvider = (props) => {

    const [cartItems, dispatch] = useReducer(CartItemReducer, [])
    const [init, setInit]= useState(false)

    useEffect(()=>{
        if(init) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems))
      console.log(cartItems)
        }
    },[cartItems])

    useEffect(()=>{
       
        const data = localStorage.getItem("cartItems")
        dispatch({ payload: data?JSON.parse(data):[]})
      
        setInit(true)
       
    },[])

  return(
      <CartContext.Provider value={{cartItems, dispatch}}>
          {props.children}
      </CartContext.Provider>
  )
}

export default CartContextProvider