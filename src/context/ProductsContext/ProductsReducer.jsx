const products = (state, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                products: action.payload,
            };
        case "DELETE_PRODUCT":
            return {
                ...state,
                products: state.products.filter(
                    (product) => product.id !== action.payload.id
                ),
            };
        case "CREATE_PRODUCT":
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        case "GET_PRODUCT_BY_ID":
            return {
                ...state,
                product: action.payload,
            };
        case "GET_PRODUCT_BY_NAME":
            return {
                ...state,
                products: action.payload,
                };
        case "EDIT_PRODUCT":
            return {
                ...state,
                products: state.products.map((product) => {
                    if (product.id === action.payload.id) {
                        product = action.payload.product;
                    }
                    return product;
                }),
            };
        case "ADD_CART":
            return {
                ...state,
                cart: [action.payload, ...state.cart],
            };
        case "CLEAR_CART":
            return {
                ...state,
                cart: [],
            };
        default:
                return state;
        }
};

export default products;