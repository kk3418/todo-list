import {createSlice, configureStore, combineReducers} from '@reduxjs/toolkit'
import {loginSlice} from './loginSlice'

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        todo: true,
        done: true,
    },
    reducers: {
       display_todo: () => ({ done: false, todo: true }),
       display_done: () => ({ todo: false, done: true }),
       display_all: () => ({ done: true, todo: true }),
    }
})

export const dataSlice = createSlice({
    name: 'data',
    initialState: [],
    reducers: {
        change_stage: (state, action) => state.map(
            v => {
                if (v.docID === action.payload) {
                    return {...v, complete: !v.complete}
                }
                return {...v}
            }
        ),
        sync_items: (state, {payload}) => [...payload],
        delete_items: () => [],
    }
})

const store = configureStore({
    reducer: combineReducers({
        login: loginSlice.reducer,
        data: dataSlice.reducer,
        filter: filterSlice.reducer,
    })
})

export default store