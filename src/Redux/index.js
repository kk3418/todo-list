import {createStore, combineReducers} from 'redux'

let InitState = {
    data: [
        {
            title: "wash dishes",
            complete: false
        },
        {
            title: "go home",
            complete: true
        }
    ],
    filter: {
        todo: true,
        done: true
    }
}

function filter_reducer(state= InitState.filter, action) {
    switch(action.type){
        case "_TODO":
            return {done: false, todo: true}
        case "_DONE":
            return {done: true, todo: false}
        case "_ALL":
            return {done: true, todo: true}
        default:
            return state
    }
}

function data_reducer(state = InitState.data, action) {
    switch(action.type){
        case "ADD_ITEM":
            let tmp1 = state.filter(
                check => check.title !== action.title
            )
            return tmp1.length === state.length  ? [
                ...state,
                {
                    title: action.title,
                    complete: false
                }
            ] :
            [...state]
        case "REMOVE_ITEM": 
            let tmp2 = state.filter(
                check => check.title !== action.title
            )
            return tmp2
        case "CHANGE_STAGE":
            let tmp3 = state.map(
                check => {
                    if(check.title === action.title){
                        return {...check, complete: !check.complete}
                    }
                    return {...check}
                }
            )
            return tmp3
        default: 
                return state
    }
}

const root_reducer= combineReducers({
    data: data_reducer,
    filter: filter_reducer
})

const store = createStore(
    root_reducer, 
    InitState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default store