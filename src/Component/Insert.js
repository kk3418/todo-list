import React, {useState, useEffect, useRef} from 'react'
import {Auth, createDoc} from '../firebase'

export default function Insert({ data }) {
    const Ref = useRef()
    const [insert, setInsert] = useState("")

    const handleKeyPress = e => {
        if (e.key === 'Enter' && insert !== '') {
            e.preventDefault()
            const isRepeat = data.some(({ title }) => title === insert)
            setInsert('')
            try {
                !isRepeat && createDoc(Auth.currentUser.uid, insert)
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
                placeholder="press Enter to add item"
                type="text"
                value={insert}
                onChange={e => setInsert(e.target.value)}
                required
                onKeyPress={handleKeyPress}
            />
        </li>
    )
}