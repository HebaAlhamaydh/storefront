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
        
        {    id : 3,
            categoryId : 1,
            categoryAssociation: "Electronics",
            displayName: "TV",
            description: "laptops with 10 cameras",
            price: "15$",
            inventoryCount: 10,
            image: "https://cdn.ndtv.com/tech/images/gadgets/Isi_LCD_TV.jpg"

        },
      
        {   id : 4,
            categoryId : 2,
            categoryAssociation: "Food",
            displayName: "cake",
            description: "Rainbow cake",
            price: "15$",
            inventoryCount: 10,
            image: "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/rainbow_cake_20402_16x9.jpg"

        },
        {   id : 5,
            categoryId : 2,
            categoryAssociation: "Food",
            displayName: "chicken",
            description: " Broaster Fried Chicken",
            price: "15$",
            inventoryCount: 10,
            image: "https://live.staticflickr.com/7226/7167438192_664b616b6b_b.jpg"

        },
        {   id : 6,
            categoryId : 2,
            categoryAssociation: "Food",
            displayName: "Mango",
            description: " delicious fruit",
            price: "15$",
            inventoryCount: 10,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTudIYsIQBogJB0lXrmOC7herozWDUnrxzMmQ&usqp=CAU"

        },
        {   id : 7,
            categoryId : 3,
            categoryAssociation: "Fashion",
            displayName: "blouse",
            description: "woman blouse yellow",
            price: "15$",
            inventoryCount: 10,
            image: "https://img.alicdn.com/imgextra/i3/6000000002686/O1CN01XZNjlD1ViEPM2UsCk_!!6000000002686-0-tbvideo.jpg"
        },
        {   id : 8,
            categoryId : 3,
            categoryAssociation: "Fashion",
            displayName: "Baby Clothes",
            description: "Baby Clothes",
            price: "15$",
            inventoryCount: 10,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZpiIzU99eeVKEwJgriE_KhHX21ppyq7LCGQ&usqp=CAU"
        },
        {   id : 9,
            categoryId : 3,
            categoryAssociation: "Fashion",
            displayName: "woman's clothes",
            description: " woman's clothes and accessories stock photo",
            price: "15$",
            inventoryCount: 10,
            image: "https://media.istockphoto.com/photos/woman-clothing-and-accessories-in-pastel-colors-picture-id1071832408"
        },
    ],
    selectedProducts: {}
};
export default function productReducer (state = initialState, action) {
    
    const { type, payload } = action;
    switch (type) {
        case "SELECT_PRODUCT":

            // let products = state.products.filter((product, indx) => product.categoryAssociation === payload)
            let selectedProduct = state.products.find(product => product.id === payload);
            return {
                ...state,
                selectedProducts: selectedProduct,
                // products: products
            };
            case 'Decrement_Product_Quantity' :
                
               let newproducts =state.products.map(product => {
                 
                    if(product.id === payload && product.inventoryCount > 0){
                        return {...product, inventoryCount : product.inventoryCount-1};
                    }else{
                        return product;
                    }
                })
                return {
                    ...state,
                    products : newproducts
                }
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
export const decrementProductQuantity = (name) => {
    return {
        type : 'Decrement_Product_Quantity',
        payload : name
    }
}
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