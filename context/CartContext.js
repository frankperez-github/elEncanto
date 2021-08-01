import { createContext, useEffect, useReducer } from "react";
import { CartItemReducer } from "../reducers/CartItemsReducer";

export const CartContext = createContext()

/* const getLocal = async() => {
 try {
    const local = await localStorage.getItem("cartItems")
    return JSON.parse(local)
 }
    catch(err) {
        return []
    }
}
 */
const CartContextProvider = (props) => {

    const [cartItems, dispatch] = useReducer(CartItemReducer, [])

    /* useEffect(()=>{
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    },[cartItems]) */

  return(
      <CartContext.Provider value={{cartItems, dispatch}}>
          {props.children}
      </CartContext.Provider>
  )
}

export default CartContextProvider