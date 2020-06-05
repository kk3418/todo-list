import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {add_items} from '../Redux/actions'

export default function Insert() {

    const dispatch = useDispatch()
    const [insert, setInsert] = useState("")

    useEffect(() => {
        const f = document.querySelector('.insert-place')
        f.focus()
    })

    return (
        <li className="insert-area">
            <input name="A_A"
            className="insert-place"
            placeholder="add something here"
            type="text" 
            value={insert} 
            onChange={
                e => setInsert(e.target.value)
            }
            onKeyDown={ event => {
                if (event.key === 'Enter' && insert !== ''){
                    dispatch(add_items(insert))
                }
            }}
            />
        </li>
    )
}