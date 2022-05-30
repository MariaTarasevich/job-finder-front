import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from '../nav/Nav'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';



import './Promo.css'

function Promo() {
  const age = 0
  const handleChange = function(){
    console.log(age)
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
          <TextField label="Free solo with text demo" />

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <button className="promo__search-btn">Search</button>
          </div>
          <div className="promo__btns-block">
            <NavLink to="/">
              <button className="promo__post">Post a vacancy</button>
            </NavLink>
            <NavLink to="/">
              <button className="promo__post">Post a resume</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promo
