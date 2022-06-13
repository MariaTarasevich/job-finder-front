import axios from "axios";
const url ="http://localhost:3003/";
export let prof
export const createResume = resume => axios.post(url + 'resumes', resume);
export const getResume = prof => axios.get(url + 'resumes?profession=' + prof);