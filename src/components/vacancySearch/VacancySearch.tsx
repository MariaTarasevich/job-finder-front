import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'
import TextField from '@mui/material/TextField'

import './VacancySearch.css'

export default function VacancySearch() {
  const [searchValue, setSearchValue] = React.useState('')

  const vacs = JSON.parse(localStorage.getItem('vacancy'))
  console.log(vacs)
  const showSearchVal = (e) => {
    setSearchValue(e.target.value)
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
            >
              Search
            </Button>
          </Box>
        </div>
      </div>
      <div className="vacsearch__list-wrap">
        {vacs ? (
          <ul className="vacseatch__list">
            {vacs
              .filter(({ title }) =>
                title.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((item, index) => {
                console.log(item.id)
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
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
