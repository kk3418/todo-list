import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useAuthState } from 'react-firebase-hooks/auth'
import {dataSlice} from './Redux'
import {loginSlice} from './Redux/loginSlice'
import Login from './Component/Login'
import Display from './Component/Display'
import Filter from './Component/Filter'
import './style/base.css'
import { Auth } from './firebase'

function App() {
  const { succeedLogin, failLogin } = loginSlice.actions
  const { delete_items } = dataSlice.actions
  const [user] = useAuthState(Auth)
  const isLogin = useSelector(state => state.login.isLogin)
  const dispatch = useDispatch()
  const logout = () => Auth.signOut()
    .then(() => dispatch(delete_items()))

  useEffect(()=> {
    user ? dispatch(succeedLogin(user.uid)) : dispatch(failLogin())
  }, [user, dispatch, succeedLogin, failLogin])

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
