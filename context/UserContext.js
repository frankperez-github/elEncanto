import { createContext, useEffect, useReducer, useState } from "react";
import { UserReducer } from "./reducers/UserReducer";

export const UserContext = createContext()

const UserContextProvider = (props) => {

 const [user, dispatch] = useReducer(UserReducer, {})
 const [init, setInit] = useState(false)

useEffect(()=>{
    if (init) {
        localStorage.setItem("user", JSON.stringify(user))
    }
},[user])

 useEffect(()=>{
     const data = localStorage.getItem('user')
     dispatch({payload: data?JSON.parse(data):{}})
     setInit(true)
 },[])
 
    return(
        <UserContext.Provider value={{user,dispatch}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider