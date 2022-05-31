import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import './ApplicantProfile.css'

export default function ApplicantProfile() {
  return (
    <div className="profile">
      <div className="profile__creds-wrap">
        <div className="profile__creds">
          <Avatar alt="User" src="/static/images/avatar/1.jpg" />
          <p className="profile__name">Name</p>
          <p className="profile__name">Surname</p>
        </div>
        <div className="profile__extracreds">
          <p className="profile__extracred">
            Email: <span className="profile__span">user@gmail.com</span>
          </p>
          <p className="profile__extracred">
            Age: <span className="profile__span">23</span>
          </p>
          <p className="profile__extracred">
            Phone: <span className="profile__span">+111-11-111-11-11</span>
          </p>
          <p className="profile__extracred">
            Gender: <span className="profile__span">Male</span>
          </p>
        </div>
      </div>
      <Box sx={{ '& button': { m: 1 } }}>
        <Button variant="contained" size="large">
          Edit
        </Button>
      </Box>
    </div>
  )
}
