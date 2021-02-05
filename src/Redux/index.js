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
        add_item: (state, action) => {
            const tmp1 = state.filter(
                check => check.title !== action.payload
            )
            return tmp1.length === state.length ? [
                ...state,
                {
                    title: action.payload,
                    complete: false,
                }
            ] : [...state]
        },
        remove_item: (state, action) => state.filter(
            check => check.title !== action.payload
        ),
        change_stage: (state, action) => state.map(
            v => {
                if (v.title === action.payload) {
                    return {...v, complete: !v.complete}
                }
                return {...v}
            }
        ),
        sync_items: (state, action) => {
            const sync = action.payload.map(v => v)
            return [...state, sync]
        }
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