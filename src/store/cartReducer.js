

const initialState = {
    cartItems: [],
    cartItemsCount: 0,
    totalPrice: 0,
};
export default function cartReducer(state = initialState, action) {

    const { type, payload } = action;
    switch (type) {

        case "ADD-TO-CART":
            const itemInCart = state.cartItems.find((item) => item.id === payload.id);
            if(itemInCart){
                itemInCart.quantity++; 
            }
            else{
                state.cartItems.push({...payload,quantity:1});
            }
            return{
                ...state,
                cartItemsCount:state.cartItemsCount + 1,
                totalPrice: state.totalPrice+= payload.price
            }

        case "REMOVE-FROM-CART":
              
           // let deletedItem = state.cartItems.indexOf(payload);
            // state.cartItems.splice(deletedItem, 1);
             let deleteItem=state.cartItems.filter((item,indx)=>item.id !== payload.id)
            let total = state.cartItemsCount-payload.quantity;
           
            return {
                cartItems:deleteItem,
                cartItemsCount:total,
                totalPrice:state.totalPrice -=payload.price
            }
            case 'DECREASE_QUANTITY' :
                
                const itemd = state.cartItems.find((item) => item.id === payload.id);
                if (itemd.quantity ===1) {
                  itemd.quantity = 1
                 
                } else {
                        itemd.quantity--;
                         itemd.inventoryCount++;
                        state.cartItemsCount--;
                        state.totalPrice -=payload.price
                    }    
                return{
                    ...state,
                     totalPrice:state.totalPrice 
                }

                 case 'INCREASE_QUANTITY' :
                 
                const item = state.cartItems.find((item) => item.id === payload.id);
              
                    item.quantity++;
                    // item.inventoryCount--;
                    state.cartItemsCount++
                    state.totalPrice+= parseInt(payload.price)
               
               return{
                   ...state,
                   totalPrice: state.totalPrice
               }
               case 'CLEAR_CART' :
                    return {
                        ...state,
                        cartItems : [],
                        cartItemsCount : 0,
                        totalPrice: 0,
                    }
        default:
            return state;

    }
    
}
export const addToCart = (name) => {
    return {
        type: "ADD-TO-CART",
        payload: name
    }
}
export const removeFromCart = (name) => {
    return {
        type: "REMOVE-FROM-CART",
        payload: name
    }
}

export const decreaseQuantity = (name) => {
    return {
        type: "DECREASE_QUANTITY",
        payload: name,
    };
};

export const increaseQuantity = (name) => {
    return {
        type: "INCREASE_QUANTITY",
        payload: name,
    };
};
export const clearCart = () => {
    return {
        type: 'CLEAR_CART'
    }
}