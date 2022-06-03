import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import './EmployerProfile.css'

export default function EmployerProfile() {
  return (
    <div className="company__wrap">
      <div className="company">
        <div className="company__creds-wrap">
          <div className="company__creds">
            <Avatar alt="User" src="/static/images/avatar/1.jpg" />
            <p className="company__name">Name</p>
          </div>
          <div className="company__extracreds">
            <p className="company__extracred">
              Email: <span className="company__span">company@gmail.com</span>
            </p>
            <p className="company__extracred">
              Address: <span className="company__span">23</span>
            </p>
            <p className="company__extracred">
              Phone: <span className="company__span">+111-11-111-11-11</span>
            </p>
            <p className="company__extracred">
            About company: <span className="company__span">info</span>
            </p>
                          
          </div>
        </div>
        <Box sx={{ '& button': { m: 1 } }}>
          <Button variant="contained" size="large">
            Edit
          </Button>
        </Box>
      </div>
    </div>
  )
}
