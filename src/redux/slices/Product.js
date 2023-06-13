import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getLocalStorage, saveLocalStogare } from '../../utils/LocalStorage/LocalStorage';

// const listProductCart = JSON.parse(localStorage.getItem('listProductCart')) || [];
const listProductCart = getLocalStorage('listProductCart') || []
const initialState = {
    listProduct: [],
    productDetail: {},
    listProductCart: listProductCart,
    
}



const Product = createSlice({
    name: 'Product',
    initialState,
    reducers: {
        setListProduct: (state, action) => {
            state.listProduct = action.payload
        },

        setProducDetail: (state, action) => {
            state.productDetail = action.payload
        },

        setListProductCart: (state, action) => {
            const indexById = state.listProductCart.findIndex((product) => product.id === action.payload.id);
            if (indexById === -1) {
                state.listProductCart.push(action.payload)
            } else {
                state.listProductCart[indexById] = action.payload
            }
            saveLocalStogare('listProductCart',state.listProductCart)
        },

        deleteProduct: (state, action) => {
            state.listProductCart = state.listProductCart.filter((item => item.id !== action.payload))
            
            saveLocalStogare('listProductCart',state.listProductCart)
        },

        changeCount: (state, action) => {
            const {id, value} = action.payload

            const indexById = state.listProductCart.findIndex((product) => product.id === id)
            state.listProductCart[indexById].number = state.listProductCart[indexById].number + value;
            
            saveLocalStogare('listProductCart',state.listProductCart)
        },


    }
});

export const { setListProduct, setProducDetail, settoCart, setListProductCart, deleteProduct,changeCount } = Product.actions

export default Product.reducer