import * as React from 'react'
import { NavLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Slider from '@mui/material/Slider'

import { getVacs, getVacancy } from 'api.tsx'

import './VacancySearch.scss'

function valuetext (value: number) {
  return `${value}°C`
}

const minDistance = 1

const VacancySearch: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState('')
  const [isVacs, setIsVacs] = React.useState('')
  const [showVacs, setShowVacs] = React.useState<boolean>(false)
  const [vacsList, setVacList] = React.useState([])
  const [searchedVacsList, setSearchedVacsList] = React.useState([])
  const [showBtn, setShowBtn] = React.useState<boolean>(false)

  const [value2, setValue2] = React.useState<number[]>([0, 100])

  const handleChange2 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 10000 - minDistance)
        setValue2([clamped, clamped + minDistance])
      } else {
        const clamped = Math.max(newValue[1], minDistance)
        setValue2([clamped - minDistance, clamped])
      }
    } else {
      setValue2(newValue as number[])
    }
    console.log(value2)
  }

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
    <div className='vacsearch__wrap'>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <NavLink to='/' color='signup__logo'>
              <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                Job finder
              </Typography>
            </NavLink>
            <div className='vacsearch__links'>
              <NavLink to='/signup' color='signup__link'>
                <Button color='inherit'>Sign up</Button>
              </NavLink>
              <NavLink to='/signin' color='signup__link'>
                <Button color='inherit'>Sign in</Button>
              </NavLink>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <div className='vacsearch__content'>
        <div className='vacsearch__content-wrap'>
        <h2 className='vacsearch__title'>Find your best job ASAP.</h2>
        <div className='vacsearch__search-block'>
          <TextField
            label='Find vacancy'
            className='vacsearch__search'
            onChange={(e) => showSearchVal(e)}
          />
          <Box sx={{ '& button': { m: 1 } }}>
            <Button
              variant='outlined'
              size='large'
              className='vacsearch__search-btn'
              onClick={() => getSomeVacs()}
            >
              Search
            </Button>
          </Box>
          </div>
          <p className='vacsearch__subtitle'>Choose a salary range</p>
          <Slider
            getAriaLabel={() => 'Minimum distance shift'}
            value={value2}
            onChange={handleChange2}
            valueLabelDisplay='auto'
            getAriaValueText={valuetext}
            disableSwap
          />

        </div>
        {!showBtn && (<Box sx={{ '& button': { m: 1 } }}>
          <Button
            variant='contained'
            size='large'
            className='vacsearch__search-btn'
            onClick={() => { getAllVacs(); setShowVacs(true); setShowBtn(true) }}
          >
            Show all CVs
          </Button>
        </Box>)}
        {showBtn && (<Box sx={{ '& button': { m: 1 } }}>
          <Button
            variant='contained'
            size='large'
            className='vacsearch__search-btn'
            onClick={() => { setShowVacs(false); setShowBtn(false) }}
          >
            Hide
          </Button>
        </Box>)}
      </div>
      <div className='vacsearch__list-wrap'>
        {showVacs && (
          <ul className='vacseatch__list'>
            {vacsList
              .map((item, index) => {
                return (
                  <li key={index} className='vacsearch_item'>
                    <NavLink to={'/vacancy/' + item.id}>
                      <p className='vaclist__title'>{item.title}</p>
                      <div className='vaclist__desc-wrap'>
                        <p className='vaclist__desc'>{item.salary}</p>
                        <p className='vaclist__desc'>{item.reqExperience}</p>
                        <p className='vaclist__desc'>{item.schedule}</p>
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
                console.log(item.salary)
                return (
                  <li className='vacsearch_item' key={item.id}>
                    <NavLink to={'/vacancy/' + item.id}>
                      <p className='vaclist__title'>{item.title}</p>
                      <div className='vaclist__desc-wrap'>
                        <p className='vaclist__desc'>{item.salary}</p>
                        <p className='vaclist__desc'>{item.reqExperience}</p>
                        <p className='vaclist__desc'>{item.schedule}</p>
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
