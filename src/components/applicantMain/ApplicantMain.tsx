import React, { useState } from 'react'
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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ExtensionIcon from '@mui/icons-material/Extension';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'
import './ApplicantMain.css'
import ApplicantProfile from '../applicantProfile/ApplicantProfile.tsx'
import Mail from '../mail/Mail.tsx'
import ResumeConstructor from '../resumeConstructor/ResumeConstructor.tsx'
import Promotion from '../promotion/Promotion.tsx'
import Responces from '../responces/Responces.tsx'
import ResumeFolder from '../resumeFolder/ResumeFolder.tsx'
import Support from '../support/Support.tsx'

const drawerWidth = 240
const ApplicantMain: React.FC = () => {
  const [page, setPage] = useState<string>('')

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
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Profile', 'Mail', 'Responces', 'Promotion'].map(
              (text) => (
                <ListItem
                  key={text}
                  disablePadding
                  onClick={() => setPage(text)}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      {text == 'Profile' && <AccountCircleIcon />}
                      {text == 'Mail' && <MailIcon />}
                      {text == 'Responces' && <EmojiPeopleIcon />}
                      {text == 'Promotion' && <EmojiEventsIcon />}
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
              <ListItem key={text} disablePadding onClick={() => setPage(text)}>
                <ListItemButton>
                  <ListItemIcon>
                  {text == 'Resume constructor' && <ExtensionIcon />}
                  {text == 'My resume' && <HomeRepairServiceIcon />}
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
        {page === '' && <ApplicantProfile />}
        {page === 'Profile' && <ApplicantProfile />}
        {page === 'Mail' && <Mail />}
        {page === 'Resume constructor' && <ResumeConstructor />}
        {page === 'Promotion' && <Promotion />}
        {page === 'Responces' && <Responces />}
        {page === 'My resume' && <ResumeFolder />}
        {page === 'Support' && <Support />}
        <div className="main__bot"></div>
      </Box>
    </Box>
  )
}

export default ApplicantMain