import React from 'react'
import { Route, Routes } from 'react-router-dom'

import ApplicantMain from './components/applicantMain/ApplicantMain.tsx'
import EmployerMain from './components/employerMain/EmployerMain.tsx'
import Home from './components/home/Home.tsx'
import ResumePage from './components/resumePage/ResumePage.tsx'
import ResumeSearch from './components/resumeSearch/ResumeSearch.tsx'
import SignInPage from './components/signInPage/SignInPage.tsx'
import SignUpPage from './components/signUpPage/SignUpPage.tsx'
import VacancyPage from './components/vacancyPage/VacancyPage.tsx'
import VacancySearch from './components/vacancySearch/VacancySearch.tsx'
import Contacts from './components/contacts/Contacts.tsx'
import About from './components/about/About.tsx'

import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applicant" element={<ApplicantMain />} />
        <Route path="/employer" element={<EmployerMain />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/resumesearch" element={<ResumeSearch />} />
        <Route path="/vacancysearch" element={<VacancySearch />} />
        <Route path="/vacancy/:id" element={<VacancyPage />} />
        <Route path="/resume/:id" element={<ResumePage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
