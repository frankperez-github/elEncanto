export const UserReducer = (state, action) => {
    switch(action.type) {
       
       
        case "LOGOUT": {
            return {}
        }
        default: return action.payload
        
    }
}