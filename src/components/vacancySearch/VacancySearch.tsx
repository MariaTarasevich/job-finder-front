import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import { getVacs, getVacancy } from '../../api.tsx'

import './VacancySearch.css'

const VacancySearch: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState('')
  const [isVacs, setIsVacs] = React.useState('')
  const [showVacs, setShowVacs] = React.useState<boolean>(false)
  const [vacsList, setVacList] = React.useState([])
  const [searchedVacsList, setSearchedVacsList] = React.useState([])
  const [showBtn, setShowBtn] = React.useState<boolean>(false)

  let allVacs, vacs
  const showSearchVal = (e) => {
    setSearchValue(e.target.value)
  }

  const getAllVacs = () => {
    getVacs()
      .then(data => {
        allVacs = data.data
        setVacList(allVacs)
      })
      .catch(() => {
        console.log('ERR')
      })
  }

  function getSomeVacs () {
    getVacancy(searchValue.toLowerCase())
      .then((data) => {
        vacs = data.data
        setSearchedVacsList(vacs)
        setIsVacs('yes')
      })
      .catch(() => {
        setIsVacs('no')
      })
  }

  return (
    <div className="vacsearch__wrap">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <NavLink to="/" color="signup__logo">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Job finder
              </Typography>
            </NavLink>
            <div className="vacsearch__links">
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
      <div className="vacsearch__content">
        <h2 className="vacsearch__title">Find your best job ASAP.</h2>
        <div className="vacsearch__search-block">
          <TextField
            label="Find vacancy"
            className="vacsearch__search"
            onChange={(e) => showSearchVal(e)}
          />
          <Box sx={{ '& button': { m: 1 } }}>
            <Button
              variant="outlined"
              size="large"
              className="vacsearch__search-btn"
              onClick={() => getSomeVacs()}
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
              onClick={() => { getAllVacs(); setShowVacs(true); setShowBtn(true) }}
            >
              Show all CVs
            </Button>
          </Box>)}
          {showBtn && (<Box sx={{ '& button': { m: 1 } }}>
            <Button
              variant="contained"
              size="large"
              className="vacsearch__search-btn"
              onClick={() => { setShowVacs(false); setShowBtn(false) }}
            >
              Hide
            </Button>
          </Box>)}
      </div>
      <div className="vacsearch__list-wrap">
        {showVacs && (
          <ul className="vacseatch__list">
            {vacsList
              .map((item, index) => {
                return (
                  <li key={index} className="vacsearch_item">
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
        {isVacs === 'yes' && (
          <div className='searchedres__wrap'>
            <ul className='searched_list'>
              {searchedVacsList.map((item) => {
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
          </div>
        )}
      </div>
    </div>
  )
}
export default VacancySearch
