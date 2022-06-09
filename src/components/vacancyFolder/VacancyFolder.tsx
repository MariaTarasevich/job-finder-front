import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import './VacancyFolder.css'

export default function VacancyFolder() {
  let vacList = JSON.parse(localStorage.getItem('vacancy'))

  return (
    <div className="vac">
      {vacList ? (
        <div className="vac__wrap">
          {vacList.map((item, index) => {
            return (
              <div className="vac__content" key={index}>
                <div className="vac__creds-wrap">
                  <div className="vac__creds">
                    <div className="vac__creds-content">
                      <Avatar
                        alt="Company"
                        src="/static/images/avatar/1.jpg"
                        onClick={() => console.log(vacList)}
                      />
                      <p className="vac__name">{item.title}</p>
                    </div>
                  </div>
                  <div className="vac__extracreds">
                    <p className="vac__extracred">
                      <span className="vac__span"> Salary:</span>
                      {item.salary}
                    </p>
                    <p className="vac__extracred">
                      <span className="vac__span">Contacts:</span>
                      {item.contacts}
                    </p>
                    <p className="vac__extracred">
                      <span className="vac__span">
                        Required work experience:{' '}
                      </span>
                      {item.reqExperience}
                    </p>
                    <p className="vac__extracred">
                      <span className="vac__span">City: </span>
                      {item.city}
                    </p>
                    <p className="vac__extracred">
                      <span className="vac__span">Schedule:</span>
                      {item.schedule}
                    </p>
                    <p className="vac__extracred">{item.generalInfo}</p>
                  </div>
                  <div className="vac__btn-wrap">
                    <div className="vac__btn-cont">
                      <Box sx={{ '& button': { m: 1 } }}>
                        <Button variant="contained" size="large">
                          Edit
                        </Button>
                      </Box>
                      <Box sx={{ '& button': { m: 1 } }}>
                        <Button variant="contained" size="large">
                          delete
                        </Button>
                      </Box>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <h3 className="res__nores">You have no vacancies yet</h3>
      )}
    </div>
  )
}
