import {configureStore} from '@reduxjs/toolkit'
import ListProductReducer from './slices/ListProductSlice'


export const store = configureStore({
    reducer: {
        ListProductReducer
    }
})