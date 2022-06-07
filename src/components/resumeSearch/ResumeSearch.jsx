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

function Copyright(props) {

    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {'Copyright © '}
            <Link color="inherit" href="#">
                job-finder.com
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const theme = createTheme()
export default function ResumeSearch() {
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
        <div className="ressearch__wrap">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <NavLink to="/" color="signup__logo">
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Job finder
                            </Typography>
                        </NavLink>
                        <div className='ressearch__links'>
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
            <div className='ressearch__content'>
                <h2 className="ressearch__title">
                     – find
                    jobs and employees all over the world.
                </h2>
                <div className="ressearch__search-block">
                    <TextField
                        label="Find vacancy or resume"
                        className="ressearch__search"
                    />
                </div>
            </div>

        </div>
    )
}
