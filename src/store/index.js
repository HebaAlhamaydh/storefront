import { combineReducers } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './catogoriseReducer'
import prodSlice from './productReducer'
import cartReducer from './cartReducer';

let reducer = combineReducers({
    categoryReducer: categoryReducer,
    productReducer: prodSlice,
    cartReducer:cartReducer
})

const store = configureStore({ reducer});
export default store;





// import { combineReducers, createStore, applyMiddleware } from 'redux';
// import categoryReducer from './catogoriseReducer'
// import productReducer from './productReducer'
// import cartReducer from './cartReducer';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// let reducers = combineReducers({
//     categoryReducer: categoryReducer,
//     productReducer: productReducer,
//     cartReducer:cartReducer
// })


// const store = () => {
   
//     return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

// }

// export default store();