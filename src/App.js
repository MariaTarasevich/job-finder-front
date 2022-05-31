import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ApplicantMain from './components/applicantMain/ApplicantMain'
import Home from './components/home/Home'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/main" element={<ApplicantMain />} />
      </Routes>
    </div>
  )
}

export default App
