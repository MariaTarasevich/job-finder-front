import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import AppBar from '@mui/material/AppBar'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MailIcon from '@mui/icons-material/Mail'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import ApartmentIcon from '@mui/icons-material/Apartment'
import ExtensionIcon from '@mui/icons-material/Extension'
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import Button from '@mui/material/Button'

import Mail from '../mail/Mail.tsx'
import VacancyConstructor from '../vacancyConstructor/VacancyConstructor.tsx'
import Promotion from '../promotion/Promotion.tsx'
import Responces from '../responces/Responces.tsx'
import Support from '../support/Support.tsx'
import EmployerProfile from '../employerProfile/EmployerProfile.tsx'
import VacancyFolder from '../vacancyFolder/VacancyFolder.tsx'

const drawerWidth = 240

export default function EmployerMain () {
  const [applicantPageType, setApplicantPageType] = useState<string>('')

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" className='main__logo'>
            <NavLink to='/' className='main__logo-link'>
              Job finder
            </NavLink>
          </Typography>
          <div className="nav__auth-wrap">
            <NavLink to="/resumesearch" className="nav__auth-link">
              <Box sx={{ '& button': { m: 1 } }}>
                <Button
                  variant="contained"
                  size="large"
                  className="promo__search-btn"
                >
                  Search
                </Button>
              </Box>
            </NavLink>
            <NavLink to="/" className="nav__auth-link">
              <Box sx={{ '& button': { m: 1 } }}>
                <Button
                  variant="contained"
                  size="large"
                  className="promo__search-btn button__sign-out"
                >
                  Sign out
                </Button>
              </Box>
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Company profile', 'Mail', 'Responces', 'Promotion'].map(
              (text, index) => (
                <ListItem
                  key={index}
                  disablePadding
                  onClick={() => setApplicantPageType(text)}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      {text === 'Company profile' && <ApartmentIcon />}
                      {text === 'Mail' && <MailIcon />}
                      {text === 'Responces' && <EmojiPeopleIcon />}
                      {text === 'Promotion' && <EmojiEventsIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
          <Divider />
          <List>
            {['Vacancy constructor', 'My vacancies', 'Support'].map((text, index) => (
              <ListItem key={index} disablePadding onClick={() => setApplicantPageType(text)}>
                <ListItemButton>
                  <ListItemIcon>
                    {text === 'Vacancy constructor' && <ExtensionIcon />}
                    {text === 'My vacancies' && <HomeRepairServiceIcon />}
                    {text === 'Support' && <SupportAgentIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {applicantPageType === '' && <EmployerProfile />}
        {applicantPageType === 'Company profile' && <EmployerProfile />}
        {applicantPageType === 'Mail' && <Mail />}
        {applicantPageType === 'Vacancy constructor' && <VacancyConstructor />}
        {applicantPageType === 'Promotion' && <Promotion />}
        {applicantPageType === 'Responces' && <Responces />}
        {applicantPageType === 'My vacancies' && <VacancyFolder />}
        {applicantPageType === 'Support' && <Support />}
        <div className="main__bot"></div>
      </Box>
    </Box>
  )
}
