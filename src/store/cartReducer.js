import React from 'react'

const initialState = {
    cartItems: [],
    cartItemsCount: 0,

};
export default function cartReducer(state = initialState, action) {

    const { type, payload } = action;
    switch (type) {

        case "ADD-TO-CART":

            let cartCount = state.cartItemsCount + 1;
            let cartArr = [...state.cartItems];
            cartArr.push(payload);
            return { 
                cartItems: cartArr, 
                cartItemsCount: cartCount 
            };

        case "REMOVE-FROM-CART":

            let deletedItem = state.cartItems.indexOf(payload);
            state.cartItems.splice(deletedItem, 1);
            let total = state.cartItemsCount - 1;
           
            return {
                ...state,
                cartItemsCount: total
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
export const removeFromCart = (itemId) => {
    return {
        type: "REMOVE-FROM-CART",
        payload: itemId
    }
}

