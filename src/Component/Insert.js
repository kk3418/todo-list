import React, {useState, useEffect, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {dataSlice} from '../Redux'
import {updateDoc} from '../firebase'

export default function Insert() {
    const Ref = useRef()
    const uid = useSelector(state => state.login.uid)
    const dispatch = useDispatch()
    const [insert, setInsert] = useState("")
    const { add_item } = dataSlice.actions

    useEffect(() => {
        Ref.current.focus()
    })

    return (
        <li className="insert-area">
            <input name="A_A"
                ref={Ref}
                className="insert-place"
                placeholder="add something here"
                type="text"
                value={insert}
                onChange={
                    e => setInsert(e.target.value)
                }
                onKeyPress={event => {
                    if (event.key === 'Enter' && insert !== '') {
                        dispatch(add_item(insert))
                        setInsert('')
                        try {
                            updateDoc(uid, insert)
                        } catch {
                            console.error('updateDoc function fail')
                        }
                    }
                }}
            />
        </li>
    )
}