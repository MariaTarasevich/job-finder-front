import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ApplicantMain from './components/applicantMain/ApplicantMain'
import EmployerMain from './components/employerMain/employerMain'
import Home from './components/home/Home'
import SignInPage from './components/signInPage/SignInPage'
import SignUpPage from './components/signUpPage/SignUpPage'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/main/applicant" element={<ApplicantMain />} />
        <Route  path="/main/employer" element={<EmployerMain />} />
        <Route  path="/signup" element={<SignUpPage />} />
        <Route  path="/signin" element={<SignInPage />} />
      </Routes>
    </div>
  )
}

export default App
