import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import AppBar from '@mui/material/AppBar'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MailIcon from '@mui/icons-material/Mail'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import Button from '@mui/material/Button'
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService'

import AplicantProfilesForAdmin from 'components/aplicantProfilesForAdmin/AplicantProfilesForAdmin'
import VacancyListForAdmin from 'components/vacancyListForAdmin/VacancyListForAdmin'
import CVListForAdmin from 'components/CVListForAdmin/CVListForAdmin'
import EmployerProfilesForAdmin from 'components/employerProfilesForAdmin/EmployerProfilesForAdmin'
import Support from 'components/support/Support.tsx'
import { logout } from 'api.tsx'

import './AdminMain.scss'

const DRAWER_WIDTH = 240
const AdminMain: React.FC = () => {
  const [adminPageType, setAdminPageType] = useState<string>('')

  const topApplicantmenu = {
    SUPPORT: 'Support',
    APPLICANT_PROFILES: 'Applicant profiles',
    EMPLOYER_PROFILES: 'Employer profiles',
    VACANCY_LIST: 'Vacancy list',
    CV_LIST: 'CV list'
  }

  let topApplicantMenuArr = []

  topApplicantMenuArr = Object.values(topApplicantmenu)

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
            <NavLink to="/" className="nav__auth-link">
              <Box sx={{ '& button': { m: 1 } }}>
                <Button
                  variant="contained"
                  size="large"
                  className="promo__search-btn button__sign-out"
                  onClick={() => logout()}
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
          width: DRAWER_WIDTH,
          flexShrink: 0
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {topApplicantMenuArr.map(
              (text) => (
                <ListItem
                  key={text}
                  disablePadding
                  onClick={() => setAdminPageType(text)}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      {text === 'Support' && <SupportAgentIcon />}
                      {text === 'Mail' && <MailIcon />}
                      {text === 'Applicant profiles' && <EmojiPeopleIcon />}
                      {text === 'Employer profiles' && <EmojiPeopleIcon />}
                      {text === 'Vacancy list' && <HomeRepairServiceIcon />}
                      {text === 'CV list' && <HomeRepairServiceIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Box>

      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
        {adminPageType === '' && <Support />}
        {adminPageType === 'Support' && <Support />}
        {adminPageType === 'Applicant profiles' && <AplicantProfilesForAdmin />}
        {adminPageType === 'Employer profiles' && <EmployerProfilesForAdmin />}
        {adminPageType === 'Vacancy list' && <VacancyListForAdmin />}
        {adminPageType === 'CV list' && <CVListForAdmin />}

        <div className="main__bot"></div>
      </Box>

    </Box>
  )
}

export default AdminMain
