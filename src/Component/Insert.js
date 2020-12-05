import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {dataSlice} from '../Redux'

export default function Insert() {

    const dispatch = useDispatch()
    const [insert, setInsert] = useState("")
    const { add_item } = dataSlice.actions

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
                    dispatch(add_item(insert))
                }
            }}
            />
        </li>
    )
}