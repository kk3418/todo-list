import React from 'react'
import {useDispatch} from 'react-redux'
import {display_todo, display_done, display_all} from '../Redux/actions'

export default function Filter(props) {

    const dispatch = useDispatch()

    return (
        <div className="filter-group">
            <button onClick={ () => dispatch(display_all()) }>
                ALL
            </button >
            <button onClick={ () => dispatch(display_todo()) }>
                TODO
            </button>
            <button onClick={ () => dispatch(display_done()) }>
                DONE
            </button>
        </div>
    )
}