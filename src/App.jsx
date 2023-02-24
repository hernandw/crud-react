import React, { useState } from 'react'
import Form from './components/Form'
import './App.css'
import ListTable from './components/ListTable'
import { initialDB } from './assets/db'

const App = () => {
  const [constellationList, setConstellationList] = useState(initialDB)
  return (
    <div className='container'>
      <Form constellationList={constellationList} />
      <ListTable constellationList={constellationList} />
    </div>
  )
}

export default App

