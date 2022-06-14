import axios from "axios";
const url ="http://localhost:3003/";

export const createResume = resume => axios.post(url + 'resumes', resume);
export const createVacancy = vacancy => axios.post(url + 'vacancies', vacancy);
export const getResume = prof => axios.get(url + 'resumes?profession=' + prof);
export const getVacancy = cv => axios.get(url + 'vacancies?title=' + cv);
export const getVacs = () => axios.get(url + 'vacancies');
export const getAllResumes = () => axios.get(url + 'resumes');
export const deleteResume = id => axios.delete(url + 'resumes/'+ id);
export const deleteVacancy = id => axios.delete(url + 'vacancies/'+ id);