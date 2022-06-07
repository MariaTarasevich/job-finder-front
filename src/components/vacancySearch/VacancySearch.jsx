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
    const [type, setType] = React.useState('');
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        })
    }


    const handleType = (event) => {
        setType(event.target.value);
    };
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
                        <div className='vacsearch__links'>
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
            <div className='vacsearch__content'>
                <h2 className="vacsearch__title">

                </h2>
                <div className="vacsearch__search-block">
                    <TextField
                        label="Find vacancy"
                        className="vacsearch__search"
                    />
                </div>
            </div>

        </div>
    )
}
