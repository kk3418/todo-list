import React from 'react'
import {useSelector} from 'react-redux'
import Login from './Component/Login'
import Display from './Component/Display'
import Filter from './Component/Filter'
import './style/base.css'
import { Auth } from './firebase'

function App() {
  const isLogin = useSelector(state => state.login.isLogin)
  const logout = () => Auth.signOut()

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
