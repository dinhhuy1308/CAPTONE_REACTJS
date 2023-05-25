import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listProduct: [],
}

const ListProductSlice = createSlice({
    name: 'ListProductSlice',
    initialState,
    reducers: {
        setListProduct: (state,action) => {
            state.listProduct = action.payload
        }
    }
});

export const { setListProduct } = ListProductSlice.actions

export default ListProductSlice.reducer