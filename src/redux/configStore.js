import {configureStore} from '@reduxjs/toolkit'
import ListProductReducer from './slices/Product'
import UserTestReducer from './slices/UserTest'


export const store = configureStore({
    reducer: {
        ListProductReducer,
        UserTestReducer
    }
})