import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import { getResume } from '../../api.tsx'
import './ResumeSearch.css'

const ResumeSearch: React.FC = () => {
  const res = JSON.parse(localStorage.getItem('resume'))
  const [searchValue, setSearchValue] = React.useState<string>('')
  const [searchedResumes, setSearchedResumes] = React.useState([])
  const [isResumes, setIsResumes] = React.useState<string>('')
  let resumesObj, resumes

  const vacs = JSON.parse(localStorage.getItem('vacancy'))
  console.log(vacs)
  const showSearchVal = (e) => {
    setSearchValue(e.target.value)
  }

  function getSomeResume () {
    getResume(searchValue.toLowerCase())
    .then((data) => {
       resumes = data.data
       resumes.forEach(item => resumesObj = item)
  //   const {name, secondName, dateOfBirth, gender, email, country, placeOfEducation, periodOfEducation, specialization, prevCompany, periodOfWork, profession, generalInfo, contacts} = resumesObj
     setSearchedResumes(resumesObj)
     setIsResumes('yes')
    })
    .catch((err) => {
      alert('Sorry')
      setIsResumes('no')
    })
  }
  
  // let someResumes = getResume("rtyeryte")

  return (
    <div className="ressearch__wrap">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <NavLink to="/" color="signup__logo">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Job finder
              </Typography>
            </NavLink>
            <div className="ressearch__links">
              <NavLink to="/signup" color="signup__link">
                <Button color="inherit">Sign up</Button>
              </NavLink>
              <NavLink to="/signin" color="signup__link">
                <Button color="inherit">Sign in</Button>
              </NavLink>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="ressearch__content">
        <h2 className="ressearch__title">Find your best employee ASAP.</h2>
        <div className="ressearch__search-block">
          <TextField
            label="Find resume"
            className="ressearch__search"
            onChange={(e) => showSearchVal(e)}
          />
          <Box sx={{ '& button': { m: 1 } }}>
            <Button
              variant="outlined"
              size="large"
              className="ressearch__search-btn"
              onClick={()=>getSomeResume()}
            >
              Search
            </Button>
          </Box>
        </div>
      </div>
      <div className="vacsearch__list-wrap">
        {/* {!isResumes && (
          <ul className="vacseatch__list">
            {res
              .filter(({ specialization }) =>
                specialization.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((item, index) => {
                return (
                  <li key={index} className="vacsearch_item">
                    <NavLink to={'/resume/' + item.id}>
                      <p className="vaclist__title">{item.specialization}</p>
                      <div className="vaclist__desc-wrap">
                        <p className="vaclist__desc">{item.generalInfo}</p>
                        <p className="vaclist__desc">{item.country}</p>
                        <p className="vaclist__desc">{item.placeOfEducation}</p>
                      </div>
                    </NavLink>
                  </li>
                )
              })}
          </ul>
        )} */}
        {isResumes == 'yes' && (
          <div className='searchedres__wrap'>
            <ul>
                  <li  className="vacsearch_item">
                    <NavLink to={'/resume/' + searchedResumes.id}>
                      <p className="vaclist__title">{searchedResumes.specialization}</p>
                      <div className="vaclist__desc-wrap">
                        <p className="vaclist__desc">{searchedResumes.generalInfo}</p>
                        <p className="vaclist__desc">{searchedResumes.country}</p>
                        <p className="vaclist__desc">{searchedResumes.placeOfEducation}</p>
                      </div>
                    </NavLink>
                  </li>
            </ul>
          </div>
        )}
        {}
      </div>
    </div>
  )
}
export default ResumeSearch