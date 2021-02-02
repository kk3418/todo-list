import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loginSlice} from './Redux/loginSlice'
import Login from './Component/Login'
import Display from './Component/Display'
import Filter from './Component/Filter'
import './style/base.css'
import { Auth } from './firebase'

function App() {
  const isLogin = useSelector(state => state.login.isLogin)
  const { succeedLogin, failLogin } = loginSlice.actions
  const dispatch = useDispatch()
  const logout = () => Auth.signOut()

  useEffect(()=> {
    Auth.onAuthStateChanged(user => {
        if (user) dispatch(succeedLogin())
        else dispatch(failLogin())
    })
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
