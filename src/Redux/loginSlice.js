import {createSlice} from '@reduxjs/toolkit'

export const loginSlice = createSlice({
    name: 'login',
    initialState : {
        isLogin: false,
    },
    reducers: {
        succeedLogin: (state, action) => ({
            uid: action.payload.uid,
            isLogin: true,
        }),
        failLogin: () => ({
            isLogin: false,
        })
    }
})