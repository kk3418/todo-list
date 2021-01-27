import {createSlice} from '@reduxjs/toolkit'

export const loginSlice = createSlice({
    name: 'login',
    initialState : {
        isLogin: false,
    },
    reducers: {
        login: () => ({ isLogin: true })
    }
})