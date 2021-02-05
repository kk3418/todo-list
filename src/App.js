import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loginSlice} from './Redux/loginSlice'
import Login from './Component/Login'
import Display from './Component/Display'
import Filter from './Component/Filter'
import './style/base.css'
import { Auth, observeChange } from './firebase'

function App() {
  const { succeedLogin, failLogin } = loginSlice.actions
  const isLogin = useSelector(state => state.login.isLogin)
  const dispatch = useDispatch()
  const logout = () => Auth.signOut()

  useEffect(()=> {
    const unsubscribe = Auth.onAuthStateChanged(user => {
        if (user) {
          dispatch(succeedLogin({ uid: user.uid }))
          observeChange(user.uid)
        }
        else dispatch(failLogin())
    })
    return unsubscribe
  })

  return (
    <>
      { isLogin ? <div className="todo-list">
        <Filter />
        <Display />
		<button className="logout-button" onClick={logout}>
           	Logout
        </button>
      </div> : <Login /> }
    </>
  )
}

export default App;
