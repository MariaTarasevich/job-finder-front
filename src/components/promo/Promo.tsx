import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from '../nav/Nav'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

import './Promo.css'

function Promo() {
  const [type, setType] = React.useState('')

  const handleChange = (event) => {
    setType(event.target.value)
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
            />
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Age
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
                <MenuItem value={'company'}>Company</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ '& button': { m: 1 } }}>
              <Button
                variant="outlined"
                size="large"
                className="promo__search-btn"
              >
                Search
              </Button>
            </Box>
          </div>
          <div className="promo__btns-block">
            <NavLink to="/" className='promo__post-link'>
              <Box sx={{ '& button': { m: 1 } }}>
                <Button variant="contained" size="large" className="promo__post">
                  Post a vacancy
                </Button>
              </Box>
            </NavLink>
            <NavLink to="/" className='promo__post-link'>
              <Box sx={{ '& button': { m: 1 } }}>
                <Button variant="contained" size="large" className="promo__post">
                  Post a resume
                </Button>
              </Box>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promo
