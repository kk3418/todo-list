import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {remove_items, change_stage} from '../Redux/actions'
import Insert from './Insert'

export default function Display() {

    const dispatch =useDispatch()
    const todo = useSelector(state => Mapping(state.data, false))
    const done = useSelector(state => Mapping(state.data, true))
    const isDisplay = useSelector(state => state.filter)

    function Mapping(s= [], diff= false) {
        const result = s.map(
            (item, index) => {
                if (item.complete === diff) return (             
                    <li key={index}> 
                        <input type="checkbox" 
                        checked={diff}
                        onChange={()=> dispatch(change_stage(item.title))}
                        />
                        {item.title}
                        <button className="remove-button"
                        onClick={
                            () => dispatch(remove_items(item.title))
                        }
                        >
                            remove
                        </button>
                    </li>
                )
                return undefined
            }
        )
        return result
    }

    return (
        <div className="container">
            <ul style={{display: isDisplay.todo ? "block" : "none"}}>
                <li style={{fontSize: "1.2rem"}}>To do</li>
                {todo}
                <Insert />
            </ul>
            <ul style={{display: isDisplay.done ? "block" : "none"}}>
                <li style={{fontSize: "1.2rem"}}>Done</li>
               {done}
            </ul>
        </div>
    )
}