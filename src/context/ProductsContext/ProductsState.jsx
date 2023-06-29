import { createContext, useReducer } from "react";
import axios from 'axios'
import ProductsReducer from './ProductsReducer'

const cart = JSON.parse(localStorage.getItem("cart"));

const initialState = {
    products: [],
    cart: cart ? cart : [],
    product: {}
};


const API_URL = "http://localhost:3000";

export const ProductsContext = createContext(initialState);

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductsReducer, initialState);

    const getProducts = async () => {
        const res = await axios.get(API_URL + "/products/getAll");
        dispatch({
            type: "GET_PRODUCTS",
            payload: res.data,
        });
        return res;
    };

    const deleteProduct = async (id) => {
        const token = JSON.parse(localStorage.getItem("token"));
        
        const res = await axios.delete(`${API_URL}/products/id/${id}`, {
            headers: {
                authorization: token,
            },
        });
        dispatch({
            type: "DELETE_PRODUCT",
            payload: res.data,
        });
        return res;
    };

    const createProduct = async (product) => {
        const token = JSON.parse(localStorage.getItem("token"));
        const res = await axios.post(`${API_URL}/products`, product, {
            headers: {
                authorization: token,
            },
        });
        dispatch({
            type: "CREATE_PRODUCT",
            payload: res.data,
        });
        return res;
        };

    const addCart = (product) => {
        dispatch({
            type: "ADD_CART",
            payload: product,
        });
    };
    const clearCart = () => {
        dispatch({
            type: "CLEAR_CART",
        });
    };
    return (
    <ProductsContext.Provider
        value={{
            products: state.products,
            cart: state.cart,
            product: state.product,
            getProducts,
            deleteProduct,
            createProduct,
            addCart,
            clearCart,
        }}
    >
        {children}
    </ProductsContext.Provider>
    );
};
