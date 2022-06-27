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
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import ExtensionIcon from '@mui/icons-material/Extension'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService'
import Button from '@mui/material/Button'

import ApplicantProfile from '../applicantProfile/ApplicantProfile.tsx'
import Mail from '../mail/Mail.tsx'
import ResumeConstructor from '../resumeConstructor/ResumeConstructor.tsx'
import Promotion from '../promotion/Promotion.tsx'
import Responces from '../responces/Responces.tsx'
import ResumeFolder from '../resumeFolder/ResumeFolder.tsx'
import Support from '../support/Support.tsx'

import './ApplicantMain.css'

const DRAWER_WIDTH = 240
const ApplicantMain: React.FC = () => {
  const [applicantPageType, setApplicantPageType] = useState<string>('')

  const topApplicantmenu = {
    PROFILE: 'Profile',
    MAIL: 'Mail',
    RESPONCES: 'Responces',
    PROMOTION: 'Promotion'
  }

  const botApplicantmenu = {
    RESUME_CONSTRUCTOR: 'Resume constructor',
    MY_RESUME: 'My resume',
    SUPPORT: 'Support'
  }

  const topApplicantmenuArr = []

  const botApplicantmenuArr = []

  for (const page in topApplicantmenu) {
    topApplicantmenuArr.push(page)
  }

  for (const page in botApplicantmenu) {
    botApplicantmenuArr.push(page)
  }

  console.log(botApplicantmenuArr)

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
            <NavLink to="/vacancysearch" className="nav__auth-link">
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
          width: DRAWER_WIDTH,
          flexShrink: 0
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {topApplicantmenuArr.map(
              (text) => (
                <ListItem
                  key={text}
                  disablePadding
                  onClick={() => setApplicantPageType(text)}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      {text === 'Profile' && <AccountCircleIcon />}
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
            {['Resume constructor', 'My resume', 'Support'].map((text, index) => (
              <ListItem key={text} disablePadding onClick={() => setApplicantPageType(text)}>
                <ListItemButton>
                  <ListItemIcon>
                  {text === 'Resume constructor' && <ExtensionIcon />}
                  {text === 'My resume' && <HomeRepairServiceIcon />}
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
        {applicantPageType === '' && <ApplicantProfile />}
        {applicantPageType === 'Profile' && <ApplicantProfile />}
        {applicantPageType === 'Mail' && <Mail />}
        {applicantPageType === 'Resume constructor' && <ResumeConstructor />}
        {applicantPageType === 'Promotion' && <Promotion />}
        {applicantPageType === 'Responces' && <Responces />}
        {applicantPageType === 'My resume' && <ResumeFolder />}
        {applicantPageType === 'Support' && <Support />}
        <div className="main__bot"></div>
      </Box>
    </Box>
  )
}

export default ApplicantMain
