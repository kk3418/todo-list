import React, {useState, useEffect, useRef} from 'react'
import {useDispatch} from 'react-redux'
import {dataSlice} from '../Redux'
import {Auth, createDoc} from '../firebase'

export default function Insert() {
    const Ref = useRef()
    const dispatch = useDispatch()
    const [insert, setInsert] = useState("")
    const { add_item } = dataSlice.actions
    const handleKeyPress = e => {
        if (e.key === 'Enter' && insert !== '') {
            e.preventDefault()
            dispatch(add_item(insert))
            setInsert('')
            try {
                createDoc(Auth.currentUser.uid, insert)
            } catch(error) {
                console.error('createDoc function fail', error)
            }
        }
    }

    useEffect(() => {
        Ref.current.focus()
    })

    return (
        <li className="insert-area">
            <input name="insert-box"
                ref={Ref}
                className="insert-place"
                placeholder="add something here"
                type="text"
                value={insert}
                onChange={e => setInsert(e.target.value)}
                required
                onKeyPress={handleKeyPress}
            />
        </li>
    )
}