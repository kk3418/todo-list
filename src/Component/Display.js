import React, {useCallback, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {dataSlice} from '../Redux'
import Insert from './Insert'
import { useCollection } from 'react-firebase-hooks/firestore'
import  {Auth, fetchQuery, removeDoc, updateDoc } from '../firebase'

export default function Display() {
    const dispatch = useDispatch()
    const { sync_items } = dataSlice.actions
    const [downloadData] = useCollection(fetchQuery(Auth.currentUser.uid))
    const data = useSelector(state => state.data)
    const isDisplay = useSelector(state => state.filter)

    const handleRemove = (docID) => {
        try {
            removeDoc(docID)
        } catch(error) {
            console.error('fail', error)
        }
    }

    const handleCheckStatus = (docID, complete) => {
        try {
            updateDoc(docID, complete)
        } catch(error) {
            console.error('updateDoc fail', error)
        }
    }

    const fetchData = useCallback(() => {
        downloadData && dispatch(sync_items(
            downloadData.docs.map(doc => ({
                title: doc.data().todo,
                complete: doc.data().complete,
                docID: doc.id,
            }))
        ))
    }, [downloadData, dispatch, sync_items])
    
    useEffect(() => {
        fetchData()
    }, [fetchData])

    function createList(s, isCompleted= false) {
        if (!s) return 
        const result = s.map(
            (item, index) => {
                if (item.complete === isCompleted) return (             
                    <li key={index}> 
                        <input type="checkbox"
                            id={item.docID}
                            className="check-done" 
                            checked={isCompleted}
                            onChange={() => handleCheckStatus(item.docID, !item.complete)}
                        />
                        <label htmlFor={item.docID}>{ item.title }</label>
                        <button className="remove-button"
                            onClick={() => handleRemove(item.docID, item.complete)}
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
                <Insert data={data} />
            </ul>
            <ul style={{display: isDisplay.done ? "block" : "none"}}>
                <li style={{fontSize: "1.2rem"}}>Done</li>
               { createList(data, true) }
            </ul>
        </div>
    )
}