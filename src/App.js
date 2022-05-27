import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
