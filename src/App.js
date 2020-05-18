import React from 'react';
import Display from './Component/Display'
import Filter from './Component/Filter'
import './styles.css';

function App() {

  return (
    <div className="todo-list">
      <Filter />
      <Display />
    </div>
  )
}

export default App;
