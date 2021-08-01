export const  CartItemReducer = (state, action) => {
    const item = action.payload


    switch(action.type) {
        case "ADD_ITEM":
        {
        return state.find(x=>x.product===item.product)?state.map(x=>x.product===item.product?item:x):[...state, item]}


        case"REMOVE_ITEM":
        
        return state.filter(i=>i.product!==item.product)
        case "INITIAL": return item
        default: return state
    }
}