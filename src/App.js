import React from 'react'
import {useSelector} from 'react-redux'
import Login from './Component/Login'
import Display from './Component/Display'
import Filter from './Component/Filter'
import './style/base.css'

function App() {
  const isLogin = useSelector(state => state.login.isLogin)

  return (
    <>
      { isLogin ? <div className="todo-list">
        <Filter />
        <Display />
      </div> : <Login /> }
    </>
  )
}

export default App;
