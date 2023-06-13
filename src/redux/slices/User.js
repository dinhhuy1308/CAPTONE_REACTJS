import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { ACCESS_TOKEN } from '../../contants';
import { getLocalStorage, saveLocalStogare } from '../../utils/LocalStorage/LocalStorage';
import { axiosWithAuth } from '../../services/config.services';

const profile = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : {}


const initialState = {
    userProfile: profile,
}

export const getProfileThunk = createAsyncThunk('UserSlice/getProfileThunk',
    async () => {
        const resp = await axiosWithAuth.post('/Users/getProfile');
        localStorage.setItem('userProfile', JSON.stringify(resp.data.content))
        return resp;
    });
    
    const UserSlice = createSlice({
        name: 'UserSlice',
        initialState,
        reducers: {
            resetUserProfile: (state, action) => {
                state.userProfile = {}
                localStorage.setItem('userProfile', JSON.stringify({}))
            }
        },
        
        extraReducers: (builder) => {
            builder.addCase(getProfileThunk.fulfilled, (state, action) => {
                state.userProfile = action.payload.data.content
        });
    }
});

export const { resetUserProfile } = UserSlice.actions

export default UserSlice.reducer