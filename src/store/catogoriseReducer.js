import superagent from 'superagent';
// let api="https://heba-auth-api.herokuapp.com/v1/categories";

// let api="https://api.escuelajs.co/api/v1/categories"

// const initialState = {
//     categories: [],
//     selectedCategory : "",
// }
const initialState = {
    categories: [
        {
            dispalyName: 'Electronics',
            id : 1,
            description: 'This category contains the Electronics'
        },
        {
            dispalyName: "Food",
            id :    2,
            description: "This category contains the Food"
        },
        {
            dispalyName : 'Fashion',
            id :   3,
            description :'This category contains Fashion Stuff'
        },
    ],
    selectedCategory : "",
};

export default function categoryReducer(state = initialState, action) {

    const { type, payload } = action;
    switch (type) {
        
            // case 'GET':
            //     return {
            //        ...state,
            //         selectedCategory: payload.dispalyName
            //     }

        case 'SET_ACTIVE_CATEGORY':
            //if i use ctegory.js i comment this line  update selectedCategory:payload
            let selectedCategory = state.categories.find(category => category.id === payload);
            // let selectedCategory =state.categories.find(category => category.dispalyName === payload.dispalyName)
            return {
                ...state,
                selectedCategory :selectedCategory 
            }
            case 'RESET':
                return initialState;
        default:
            return state;
    }
}
//actions
export function selectCategory(name) {
    return {
        type: "SET_ACTIVE_CATEGORY",
        payload: name
    }
}
export const reset = () => {

    return {
        type: 'RESET'
    }
}
// export const getRemoteCategorise = () => (dispatch) => {
//     return superagent.get(api).then((data) => {
//         dispatch(getAction(data.body));
     
//     })
// }
// const getAction = (payload) => {
//     console.log("categoryyyy",payload);
//     return {
       
//         type: 'GET',
//         payload: payload
//     }
// }
