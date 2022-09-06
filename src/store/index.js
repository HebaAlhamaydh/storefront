import { combineReducers, createStore } from 'redux';
import categoryReducer from './catogoriseReducer'
import productReducer from './productReducer'
import cartReducer from './cartReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
let reducers = combineReducers({
    categoryReducer: categoryReducer,
    productReducer: productReducer,
    cartReducer:cartReducer
})


const store = () => {
   
    return createStore(reducers, composeWithDevTools());

}

export default store();