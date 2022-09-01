const initialState = {
    products: [
        {   id : 1,
            categoryId : 1,
            categoryAssociation: "Electronics",
            displayName: "phones",
            description: "smart phone with 10 cameras",
            price: "15$",
            inventoryCount: 12,
            image: "https://bgr.com/wp-content/uploads/2021/06/prime-day-phone-deals.jpg?resize=1440,810"

        },
        {    id : 2,
            categoryId : 1,
            categoryAssociation: "Electronics",
            displayName: "laptops",
            description: "laptops with 10 cameras",
            price: "15$",
            inventoryCount: 10,
            image: "https://s.yimg.com/ny/api/res/1.2/HPQ1TpmclVg_lNVoXd.C2w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MDtjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2022-02/f8631920-9109-11ec-bfff-9d63cfe04867"

        },
       
        {   id : 3,
            categoryId : 2,
            categoryAssociation: "Food",
            displayName: "cake",
            description: "Rainbow cake",
            price: "15$",
            inventoryCount: 10,
            image: "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/rainbow_cake_20402_16x9.jpg"

        },
        {   id : 4,
            categoryId : 2,
            categoryAssociation: "Food",
            displayName: "chicken",
            description: " Broaster Fried Chicken",
            price: "15$",
            inventoryCount: 10,
            image: "https://live.staticflickr.com/7226/7167438192_664b616b6b_b.jpg"

        },
        {   id : 5,
            categoryId : 3,
            categoryAssociation: "Fashion",
            displayName: "blouse",
            description: "woman blouse yellow",
            price: "15$",
            inventoryCount: 10,
            image: "https://img.alicdn.com/imgextra/i3/6000000002686/O1CN01XZNjlD1ViEPM2UsCk_!!6000000002686-0-tbvideo.jpg"
        },
    ],
    selectedProducts: {}
};
export default function productReducer (state = initialState, action) {
    
    const { type, payload } = action;
    switch (type) {
        case "SELECT_PRODUCT":

            let selectedProduct = state.products.find(product => product.id === payload);
            return {
                ...state,
                selectedProducts: selectedProduct,
            };
      

        default:
            return state;

    }
}
//actions

export const selectedProduct = (name) => {
    return {
        type: "SELECT_PRODUCT",
        payload: name,
    };
};

// export const decreaseQuantity = (name) => {
//     return {
//         type: "DECREASE_QUANTITY",
//         payload: name,
//     };
// };

// export const increaseQuantity = (name) => {
//     return {
//         type: "INCREASE_QUANTITY",
//         payload: name,
//     };
// };