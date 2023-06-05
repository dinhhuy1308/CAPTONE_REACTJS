import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {
        "email": "huycan4mat@gmail.com",
        "accessToken": "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJodXljYW40bWF0QGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlZJRVdfUFJPRklMRSIsIm5iZiI6MTY4NTk0Mzk3NCwiZXhwIjoxNjg1OTQ3NTc0fQ.WiHyTb8-vt-v-Q7yK9-qUFsmbCX2E6kS1d6a3a2mTG0"
        // "accessToken": ""
      },
}

const UserTest = createSlice({
    name: 'UserTest',
    initialState,
    reducers: {

    }
});

export const { } = UserTest.actions

export default UserTest.reducer