import axios from 'axios'

const url = 'http://localhost:3003/'

export const createResume = resume => axios.post(url + 'resumes', resume)
export const createVacancy = vacancy => axios.post(url + 'vacancies', vacancy)
export const getResume = prof => axios.get(url + 'resumes?profession=' + prof)
export const getVacancy = cv => axios.get(url + 'vacancies?title=' + cv)
export const getApplicantProfile = () => axios.get(url + 'applicant')
export const getCompamnyProfile = () => axios.get(url + 'company')
export const getVacs = () => axios.get(url + 'vacancies')
export const getAllResumes = () => axios.get(url + 'resumes')
export const deleteResume = id => axios.delete(url + 'resumes/' + id)
export const deleteVacancy = id => axios.delete(url + 'vacancies/' + id)
export const deleteCompanyProf = id => axios.delete(url + 'company/' + id)
export const deleteApplicantProf = id => axios.delete(url + 'applicant/' + id)
export const respondToVacancy = (id, respVac) => axios.post(url + 'resumesAddVacancy/' + id, respVac)
export const createApplicantProfile = applicantProfile => axios.post(url + 'applicant', applicantProfile)
export const createEmployerProfile = employerProfile => axios.post(url + 'company', employerProfile)
export const registrateUser = data => axios.post(url + 'registration', data)
export const loginUser = data => axios.post(url + 'login', data)
export const logout = () => axios.post(url + 'logout')
