import { combineReducers, createStore, applyMiddleware } from 'redux';
import categoryReducer from './catogoriseReducer'
import productReducer from './productReducer'
import cartReducer from './cartReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
let reducers = combineReducers({
    categoryReducer: categoryReducer,
    productReducer: productReducer,
    cartReducer:cartReducer
})


const store = () => {
   
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

}

export default store();