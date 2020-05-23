import React from 'react'
import {Provider} from 'react-redux'
import store from './Redux'
import Display from './Component/Display'
import Filter from './Component/Filter'
import './styles.css'

function App() {

  return (
    <Provider store={store}>
      <div className="todo-list">
        <Filter />
        <Display />
      </div>
    </Provider>
  )
}

export default App;
