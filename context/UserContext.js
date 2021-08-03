import { createContext, useReducer } from "react";
import { UserReducer } from "./reducers/UserReducer";

export const UserContext = createContext()

const UserContextProvider = (props) => {

 const [user, dispatch] = useReducer(UserReducer, {})
 
 
    return(
        <UserContext.Provider value={{user,dispatch}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider