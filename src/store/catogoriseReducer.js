
const initialState = {
    categories: [
        {
            name: 'Electronics',
            id : 1,
            description: 'this category contains the electronics'
        },
        {
            name: "Food",
            id :    2,
            description: "this category contains the food"
        },
        {
            name : 'Fashion',
            id :   3,
            description :'this category contains Fashion stuff'
    
        },
    ],
    selectedCategory : {},
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

export function selectCategory(category) {
    return {
        type: "SET_ACTIVE_CATEGORY",
        payload: category
    }
}