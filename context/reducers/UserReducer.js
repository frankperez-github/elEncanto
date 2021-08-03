export const UserReducer = (state, action) => {
    switch(action.type) {
        case "LOGIN": {
            return action.payload
           
        }
        case "LOGOUT": {
            return {}
        }
        
    }
}