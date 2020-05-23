import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {display_todo, display_done, display_all} from '../Redux/actions'

export default function Filter(props) {

    const dispatch = useDispatch()
    const{todo, done} = useSelector(state => state.filter)

    return (
        <div className="filter-group">
            <button 
            className={todo && done === true ? "is-click" : null}
            onClick={ () => dispatch(display_all()) }>
                ALL
            </button >
            <button 
            className={todo === true && done === false ? "is-click" : null}
            onClick={ () => dispatch(display_todo()) }>
                TODO
            </button>
            <button 
            className={todo === false && done === true ? "is-click" : null}
            onClick={ () => dispatch(display_done()) }>
                DONE
            </button>
        </div>
    )
}