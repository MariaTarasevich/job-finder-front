import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

export default function VacancyFolder() {
  const [vacList, setVacList] = useState('')
  useEffect(() => {
    setVacList(JSON.parse(localStorage.getItem('vacancy')))
  }, [])

 
  return (
    <div className="resume">
      {vacList ? (
        <div className="resume__wrap">
            {
                
            }
            <div className="resume__content">
              <div className="resume__creds-wrap">
                <div className="resume__creds">
                    <div className='resume__creds-content'>
                  <Avatar
                    alt="Company"
                    src="/static/images/avatar/1.jpg"
                    onClick={() => console.log(vacList)}
                  />
                  <p className="resume__name">{vacList.title}</p>
                  </div>
                </div>
                <div className="resume__extracreds">
                  <p className="resume__extracred">{vacList.generalInfo}</p>
                  <p className="resume__extracred">
                    Email: <span className="profile__span">{vacList.email}</span>
                  </p>
                  <p className="resume__extracred">
                    Date of birth:{' '}
                    <span className="profile__span">{vacList.salary}</span>
                  </p>
                  <p className="resume__extracred">
                    Phone: <span className="profile__span">{vacList.contacts}</span>
                  </p>
                  <p className="resume__extracred">
                    Gender: <span className="profile__span">{vacList.reqExperience}</span>
                  </p>
                  <p className="resume__extracred">
                    Country: <span className="profile__span">{vacList.city}</span>
                  </p>
                  <p className="resume__extracred">
                    Place of education:{' '}
                    <span className="profile__span">{vacList.schedule}</span>
                  </p>
              </div>
              <Box sx={{ '& button': { m: 1 } }}>
                <Button variant="contained" size="large">
                  Edit
                </Button>
              </Box>
            </div>
          </div>
        </div>
      ) : (
        <h3 className="res__nores">You have no resume yet</h3>
      )}
    </div>
  )
}
