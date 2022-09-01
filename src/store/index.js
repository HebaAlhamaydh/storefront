import { combineReducers, createStore } from 'redux';
import categoryReducer from './catogoriseReducer'
import productReducer from './productReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
let reducers = combineReducers({
    categoryReducer: categoryReducer,
    productReducer: productReducer
})


const store = () => {
   
    return createStore(reducers, composeWithDevTools());

}

export default store();