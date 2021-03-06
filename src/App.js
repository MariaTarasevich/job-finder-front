import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ApplicantMain from './components/applicantMain/ApplicantMain.tsx'
import EmployerMain from './components/employerMain/EmployerMain'
import Home from './components/home/Home.tsx'
import { ResumePage } from './components/resumePage/ResumePage.tsx'
import ResumeSearch from './components/resumeSearch/ResumeSearch.tsx'
import SignInPage from './components/signInPage/SignInPage.tsx'
import SignUpPage from './components/signUpPage/SignUpPage.tsx'
import { VacancyPage } from './components/vacancyPage/VacancyPage.tsx'
import VacancySearch from './components/vacancySearch/VacancySearch.tsx'


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
