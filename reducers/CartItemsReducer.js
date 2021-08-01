export const  CartItemReducer = (state, action) => {
    const item = action.payload
    switch(action.type) {
        case "ADD_ITEM":
        
        return state.find(x=>x.id===item.id)?state.map(x=>x.id===item.id?item:x):[...state, item]
        case"REMOVE_ITEM":
        
        return state.filter(i=>i.id!==item.id)

        default: return state
    }
}