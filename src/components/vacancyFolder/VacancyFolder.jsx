import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import './VacancyFolder.css'

export default function VacancyFolder() {
  const [vacList, setVacList] = useState('')
  useEffect(() => {
    setVacList(JSON.parse(localStorage.getItem('vacancy')))
  }, [])

 
  return (
    <div className="vac">
      {vacList ? (
        <div className="vac__wrap">
            <div className="vac__content">
              <div className="vac__creds-wrap">
                <div className="vac__creds">
                    <div className='vac__creds-content'>
                  <Avatar
                    alt="Company"
                    src="/static/images/avatar/1.jpg"
                    onClick={() => console.log(vacList)}
                  />
                  <p className="vac__name">{vacList.title}</p>
                  </div>
                </div>
                <div className="vac__extracreds">

                  <p className="vac__extracred">
                   
                    <span className="vac__span"> Salary:</span>{vacList.salary}
                  </p>
                  <p className="vac__extracred">
                     <span className="vac__span">Contacts:</span>{vacList.contacts}
                  </p>
                  <p className="vac__extracred">
                    <span className="vac__span">Required work experience: </span>{vacList.reqExperience}
                  </p>
                  <p className="vac__extracred">
                    <span className="vac__span">City: </span>{vacList.city}
                  </p>
                  <p className="vac__extracred">
                    <span className="vac__span">Schedule:</span>{vacList.schedule}
                  </p>
                  <p className="vac__extracred">{vacList.generalInfo}</p>
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
