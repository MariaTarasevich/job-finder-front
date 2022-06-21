import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import Nav from '../nav/Nav.tsx'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { getResume, getVacancy } from '../../api.tsx'

import './Promo.css'

const Promo: React.FC = () => {
  const [type, setType] = useState<string>('')
  const [searchedValue, setSearchedValue] = useState<string>('')
  const [searchedResumes, setSearchedResumes] = useState([])
  const [searchedVacancies, setSearchedVacancies] = useState([])
  const [isResumes, setIsResumes] = useState<string>('')
  const [isVacancies, setIsVacancies] = useState<string>('')
  let resumes
  const getSearchedValue = (e) => {
    setSearchedValue(e.target.value)
  }

  const handleChange = (event) => {
    setType(event.target.value)
  }

  const findValue = () => {
    switch (type) {
      case 'resume':
        getResume(searchedValue.toLowerCase())
          .then((data) => {
            resumes = data.data
            setSearchedResumes(resumes)
            setIsResumes('yes')
            setIsVacancies('no')
          })
          .catch((err) => {
            alert(err)
            setIsResumes('no')
          })
        break
      case 'vacancy':
        getVacancy(searchedValue.toLowerCase())
          .then((data) => {
            resumes = data.data
            setSearchedVacancies(resumes)
            setIsVacancies('yes')
            setIsResumes('no')
          })
          .catch((err) => {
            alert(err)
            setIsVacancies('no')
          })
        break
    }
  }
  return (
    <div className="promo__wrap">
      <Nav />
      <div className="promo__content-wrap">
        <div className="promo__content">
          <h2 className="promo__title">
            <span className="promo__title-blue">job-finder.com</span> – find
            jobs and employees all over the world.
          </h2>
          <div className="promo__search-block">
            <TextField
              label="Find vacancy or resume"
              className="promo__search"
              onChange={(e) => getSearchedValue(e)}
            />
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={type}
                onChange={handleChange}
                autoWidth
                label="Type"
                className="promo__select"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'vacancy'}>Vacancy</MenuItem>
                <MenuItem value={'resume'}>Resume</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ '& button': { m: 1 } }}>
              <Button
                variant="outlined"
                size="large"
                className="promo__search-btn"
                onClick={() => findValue()}
              >
                Search
              </Button>
            </Box>
          </div>
          <div className="promo__btns-block">
            <NavLink to="/signup" className='promo__post-link'>
              <Box sx={{ '& button': { m: 1 } }}>
                <Button variant="contained" size="large" className="promo__post">
                  Post a vacancy
                </Button>
              </Box>
            </NavLink>
            <NavLink to="/signup" className='promo__post-link'>
              <Box sx={{ '& button': { m: 1 } }}>
                <Button variant="contained" size="large" className="promo__post">
                  Post a resume
                </Button>
              </Box>
            </NavLink>
          </div>
        </div>
      </div>
      {isResumes == 'yes' && (
        <ul className='searched__wrap'>
          {searchedResumes.map((item, index)=>{
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
            {isVacancies == 'yes' && (
        <ul className='searched__wrap'>
          {searchedVacancies.map((item, index)=>{
            return (
            <li className="vacsearch_item" key={item.id}>
            <NavLink to={'/vacancy/' + item.id}>
              <p className="vaclist__title">{item.title}</p>
              <div className="vaclist__desc-wrap">
                <p className="vaclist__desc">{item.salary}</p>
                <p className="vaclist__desc">{item.reqExperience}</p>
                <p className="vaclist__desc">{item.schedule}</p>
              </div>
            </NavLink>
          </li>
            )
          })}
        </ul>
            )}
    </div>
  )
}

export default Promo
