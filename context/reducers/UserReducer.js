export const UserReducer = (state, action) => {
    switch(action.type) {
       
        case "REGISTER":{
            return state
        }
        case "LOGOUT": {
            return {}
        }
        default: return action.payload
        
    }
}