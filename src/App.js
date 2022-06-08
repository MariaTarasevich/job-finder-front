import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ApplicantMain from './components/applicantMain/ApplicantMain'
import EmployerMain from './components/employerMain/EmployerMain'
import Home from './components/home/Home'
import { ResumePage } from './components/resumePage/ResumePage'
import ResumeSearch from './components/resumeSearch/ResumeSearch'
import SignInPage from './components/signInPage/SignInPage'
import SignUpPage from './components/signUpPage/SignUpPage'
import { VacancyPage } from './components/vacancyPage/VacancyPage'
import VacancySearch from './components/vacancySearch/VacancySearch'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/applicant" element={<ApplicantMain />} />
        <Route  path="/employer" element={<EmployerMain />} />
        <Route  path="/signup" element={<SignUpPage />} />
        <Route  path="/signin" element={<SignInPage />} />
        <Route  path="/resumesearch" element={<ResumeSearch />} />
        <Route  path="/vacancysearch" element={<VacancySearch />} />
        <Route  path="/vacancy/:id" element={<VacancyPage />} />
        <Route  path="/resume/:id" element={<ResumePage />} />
      </Routes>
    </div>
  )
}

export default App
