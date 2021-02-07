import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {dataSlice} from '../Redux'
import Insert from './Insert'

export default function Display() {
    const dispatch =useDispatch()
    const { change_stage, remove_item} = dataSlice.actions
    const data = useSelector(state => state.data)
    const isDisplay = useSelector(state => state.filter)

    function createList(s= [], isCompleted= false) {
        const result = s.map(
            (item, index) => {
                if (item.complete === isCompleted) return (             
                    <li key={index}> 
                        <input type="checkbox"
                            className="check-done" 
                            checked={isCompleted}
                            onChange={()=> dispatch(change_stage(item.title))}
                        />
                        {item.title}
                        <button className="remove-button"
                            onClick={() => dispatch(remove_item(item.title))}
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
        <div className="list">
            <ul style={{display: isDisplay.todo ? "block" : "none"}}>
                <li style={{fontSize: "1.2rem"}}>To do</li>
                { createList(data, false) }
                <Insert />
            </ul>
            <ul style={{display: isDisplay.done ? "block" : "none"}}>
                <li style={{fontSize: "1.2rem"}}>Done</li>
               { createList(data, true) }
            </ul>
        </div>
    )
}