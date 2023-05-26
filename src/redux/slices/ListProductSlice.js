import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listProduct: [],
    productDetail: {},
    cart: 0,
}

const ListProductSlice = createSlice({
    name: 'ListProductSlice',
    initialState,
    reducers: {
        setListProduct: (state,action) => {
            state.listProduct = action.payload
        },

        setProducDetail: (state,action) => {
            state.productDetail = action.payload
        },

        settoCart: (state, action) => {
            state.cart = action.payload
        }
        
    }
});

export const { setListProduct, setProducDetail,settoCart } = ListProductSlice.actions

export default ListProductSlice.reducer