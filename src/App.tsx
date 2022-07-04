import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Lottie from 'lottie-react'
import lf202drribtu from './lotties/lf202drribtu.json'

import './App.css'

const ApplicantMain = React.lazy(() => import('./components/applicantMain/ApplicantMain.tsx'))
const EmployerMain = React.lazy(() => import('./components/employerMain/EmployerMain.tsx'))
const Home = React.lazy(() => import('./components/home/Home.tsx'))
const ResumePage = React.lazy(() => import('./components/resumePage/ResumePage.tsx'))
const ResumeSearch = React.lazy(() => import('./components/resumeSearch/ResumeSearch.tsx'))
const SignInPage = React.lazy(() => import('./components/signInPage/SignInPage.tsx'))
const SignUpPage = React.lazy(() => import('./components/signUpPage/SignUpPage.tsx'))
const VacancyPage = React.lazy(() => import('./components/vacancyPage/VacancyPage.tsx'))
const VacancySearch = React.lazy(() => import('./components/vacancySearch/VacancySearch.tsx'))
const Contacts = React.lazy(() => import('./components/contacts/Contacts.tsx'))
const About = React.lazy(() => import('./components/about/About.tsx'))

const App: React.FC = () => {
  const PRELOAD_STYLE = {
    width: '8rem',
    margin: '0 auto',
    display: 'flex',
    height: '100vh',
    alignItems: 'center'
  }
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Suspense fallback={<Lottie animationData={ lf202drribtu } style={ PRELOAD_STYLE } />}><Home /></Suspense>} />
        <Route path='/applicant' element={<Suspense fallback={<Lottie animationData={ lf202drribtu } style={ PRELOAD_STYLE } />}><ApplicantMain /></Suspense>} />
        <Route path='/employer' element={<Suspense fallback={<Lottie animationData={ lf202drribtu } style={ PRELOAD_STYLE } />}><EmployerMain /></Suspense>} />
        <Route path='/signup' element={<Suspense fallback={<Lottie animationData={ lf202drribtu } style={ PRELOAD_STYLE } />}><SignUpPage /></Suspense>} />
        <Route path='/signin' element={<Suspense fallback={<Lottie animationData={ lf202drribtu } style={ PRELOAD_STYLE } />}><SignInPage /></Suspense>} />
        <Route path='/resumesearch' element={<Suspense fallback={<Lottie animationData={ lf202drribtu } style={ PRELOAD_STYLE } />}><ResumeSearch /></Suspense>} />
        <Route path='/vacancysearch' element={<Suspense fallback={<Lottie animationData={ lf202drribtu } style={ PRELOAD_STYLE } />}><VacancySearch /></Suspense>} />
        <Route path='/vacancy/:id' element={<Suspense fallback={<Lottie animationData={ lf202drribtu } style={ PRELOAD_STYLE } />}><VacancyPage /></Suspense>} />
        <Route path='/resume/:id' element={<Suspense fallback={<Lottie animationData={ lf202drribtu } style={ PRELOAD_STYLE } />}><ResumePage /></Suspense>} />
        <Route path='/contacts' element={<Suspense fallback={<Lottie animationData={ lf202drribtu } style={ PRELOAD_STYLE } />}><Contacts /></Suspense>} />
        <Route path='/about' element={<Suspense fallback={<Lottie animationData={ lf202drribtu } style={ PRELOAD_STYLE } />}><About /></Suspense>} />
      </Routes>
    </div>
  )
}

export default App
