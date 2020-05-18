import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {add_items} from '../Redux/actions'

export default function Insert() {
    const dispatch = useDispatch()
    const [insert, setInsert] = useState("")

    return (
        <li className="insert-area">
            <input name="A_A"
            placeholder="add something here"
            type="text" 
            value={insert} 
            onChange={
                e => setInsert(e.target.value)
            }
            />
            <button onClick={
                () => {
                    dispatch(add_items(insert))
                    setInsert("")
                }
            }
            >add</button>
        </li>
    )
}