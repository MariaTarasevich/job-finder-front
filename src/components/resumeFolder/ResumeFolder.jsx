import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import './ResumeFolder.css'

export default function ResumeFolder() {
  const [resumeList, setResumeList] = useState('')
  useEffect(() => {
    setResumeList(JSON.parse(localStorage.getItem('resume')))

    console.log(resumeList)
  }, [])

 
  return (
    <div className="resume">
      {resumeList ? (
        <div className="resume__wrap">
            {
                
            }
            <div className="resume__content">
              <div className="resume__creds-wrap">
                <div className="resume__creds">
                    <div className='resume__creds-content'>
                  <Avatar
                    alt="User"
                    src="/static/images/avatar/1.jpg"
                    onClick={() => console.log(resumeList)}
                  />
                  <p className="resume__name">{resumeList.name}</p>
                  <p className="resume__name">{resumeList.secondName}</p>
                  </div>
                </div>
                <div className="resume__extracreds">
                  <p className="resume__extracred">{resumeList.generalInfo}</p>
                  <p className="resume__extracred">
                    Email: <span className="profile__span">{resumeList.email}</span>
                  </p>
                  <p className="resume__extracred">
                    Date of birth:{' '}
                    <span className="profile__span">{resumeList.dateOfBirth}</span>
                  </p>
                  <p className="resume__extracred">
                    Phone: <span className="profile__span">{resumeList.contacts}</span>
                  </p>
                  <p className="resume__extracred">
                    Gender: <span className="profile__span">{resumeList.gender}</span>
                  </p>
                  <p className="resume__extracred">
                    Country: <span className="profile__span">{resumeList.country}</span>
                  </p>
                  <p className="resume__extracred">
                    Place of education:{' '}
                    <span className="profile__span">{resumeList.placeOfEducation}</span>
                  </p>
                  <p className="resume__extracred">
                    Reriod of education:{' '}
                    <span className="profile__span">{resumeList.periodOfEducation}</span>
                  </p>
                  <p className="resume__extracred">
                    Specialization:{' '}
                    <span className="profile__span">{resumeList.specialization}</span>
                  </p>
                  <p className="resume__extracred">
                    Previous company:{' '}
                    <span className="profile__span">{resumeList.prevCompany}</span>
                  </p>
                  <p className="resume__extracred">
                    Period of work:{' '}
                    <span className="profile__span">{resumeList.periodOfWork}</span>
                  </p>
                  <p className="resume__extracred">
                    Previous company:{' '}
                    <span className="profile__span">{resumeList.prevCompany}</span>
                  </p>
                  <p className="resume__extracred">
                    Profession:{' '}
                    <span className="profile__span">{resumeList.profession}</span>
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
