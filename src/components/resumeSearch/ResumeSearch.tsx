import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import { getResume, getAllResumes } from '../../api.tsx'
import './ResumeSearch.css'

const ResumeSearch: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [searchedResumes, setSearchedResumes] = useState([])
  const [isResumes, setIsResumes] = useState<string>('')
  const [resumeList, setResumeList] = useState([])
  const [showResumes, setShowResumes] = useState<boolean>(false)
  const [showBtn, setShowBtn] = useState<boolean>(false)
  let resumes, allResumes

  const vacs = JSON.parse(localStorage.getItem('vacancy'))
  console.log(vacs)
  const showSearchVal = (e) => {
    setSearchValue(e.target.value)
  }

  function getSomeResume () {
    getResume(searchValue.toLowerCase())
      .then(data => {
        resumes = data.data
        setSearchedResumes(resumes)
        setIsResumes('yes')
      })
      .catch(err => {
        alert(err)
        setIsResumes('no')
      })
  }

  const getAllRes = () => {
    getAllResumes()
      .then(data => {
        allResumes = data.data
        setResumeList(allResumes)
      })
      .catch(() => {
        console.log('ERR')
      })
  }

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
            onChange={(e) => { showSearchVal(e); setShowResumes(false) }}
          />
          <Box sx={{ '& button': { m: 1 } }}>
            <Button
              variant="outlined"
              size="large"
              className="ressearch__search-btn"
              onClick={() => getSomeResume()}
            >
              Search
            </Button>
          </Box>
        </div>
        {!showBtn && (<Box sx={{ '& button': { m: 1 } }}>
            <Button
              variant="contained"
              size="large"
              className="vacsearch__search-btn"
              onClick={() => { getAllRes(); setShowResumes(true); setShowBtn(true) }}
            >
              Show all CVs
            </Button>
          </Box>)}
          {showBtn && (<Box sx={{ '& button': { m: 1 } }}>
            <Button
              variant="contained"
              size="large"
              className="vacsearch__search-btn"
              onClick={() => { getAllRes(); setShowResumes(false); setShowBtn(false) }}
            >
              Hide
            </Button>
          </Box>)}
      </div>
      <div className="vacsearch__list-wrap">
        {showResumes && (
          <ul className="vacseatch__list">
            {resumeList
              .map((item, index) => {
                return (
                  <li key={index} className="vacsearch_item">
                    <NavLink to={'/resume/' + item.id}>
                      <p className="vaclist__title">{item.profession}</p>
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
        )}
        {isResumes === 'yes' && (
          <div className='searchedres__wrap'>
            <ul className='searched_list'>
              {searchedResumes.map((item) => {
                return (
                  <li className="vacsearch_item" key={item.id}>
                    <NavLink to={'/resume/' + item.id}>
                      <p className="vaclist__title">{item.profession}</p>
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
          </div>
        )}
        {}
      </div>
    </div>
  )
}
export default ResumeSearch
