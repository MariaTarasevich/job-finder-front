import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './ResumeSearch.css'

const ResumeSearch: React.FC = () => {
  const res = JSON.parse(localStorage.getItem('resume'))
  const [searchValue, setSearchValue] = React.useState('')

  const vacs = JSON.parse(localStorage.getItem('vacancy'))
  console.log(vacs)
  const showSearchVal = (e) => {
    setSearchValue(e.target.value)
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
            onChange={(e) => showSearchVal(e)}
          />
          <Box sx={{ '& button': { m: 1 } }}>
            <Button
              variant="outlined"
              size="large"
              className="ressearch__search-btn"
            >
              Search
            </Button>
          </Box>
        </div>
      </div>
      <div className="vacsearch__list-wrap">
        {res ? (
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
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
export default ResumeSearch