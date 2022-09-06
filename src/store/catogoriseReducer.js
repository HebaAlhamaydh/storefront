
const initialState = {
    categories: [
        {
            name: 'Electronics',
            id : 1,
            description: 'This category contains the Electronics'
        },
        {
            name: "Food",
            id :    2,
            description: "This category contains the Food"
        },
        {
            name : 'Fashion',
            id :   3,
            description :'This category contains Fashion Stuff'
        },
    ],
    selectedCategory : "",
};
export default function categoryReducer(state = initialState, action) {

    const { type, payload } = action;
    switch (type) {
        case 'SET_ACTIVE_CATEGORY':
            let selectedCategory = state.categories.find(category => category.id === payload);
            return {
                ...state,
                selectedCategory :selectedCategory 
            }
        
        default:
            return state;

    }
}
//actions

export function selectCategory(id) {
    return {
        type: "SET_ACTIVE_CATEGORY",
        payload: id
    }
}