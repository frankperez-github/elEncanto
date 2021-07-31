import { createContext, useEffect, useReducer } from "react";
import { CartItemReducer } from "../reducers/CartItemsReducer";

export const CartContext = createContext()

const CartContextProvider = (props) => {

    const [cartItems, dispatch] = useReducer(CartItemReducer, [], async ()=> {
        const local = await localStorage.getItem("cartItems")
        return local ? JSON.parse(local): []
    })

    useEffect(()=>{
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    },[cartItems])

  return(
      <CartContext.Provider value={{cartItems, dispatch}}>
          {props.children}
      </CartContext.Provider>
  )
}

export default CartContextProvider