import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import { getAllResumes, deleteResume } from 'api.tsx'

import './ResumeFolder.scss'

const ResumeFolder: React.FC = () => {
  const [resumeList, setResumeList] = useState([])
  let allResumes
  const getAllRes = () => {
    getAllResumes()
      .then(data => {
        allResumes = data.data
        setResumeList(allResumes)
      })
      .catch(() => {
        console.log('ERR')
      })
  }
  useEffect(() => getAllRes(), [])

  const deleteCV = (id) => {
    deleteResume(id)
      .then(() => {
        console.log('Deleted')
        window.location.reload()
      })
      .catch(() => {
        console.log('error')
      })
  }
  return (
    <div className="resume">
      {resumeList.length > 0 && (
        <div className="resume__wrap">
          {resumeList.map((item, index) => {
            return (
              <div className="resume__content" key={index}>
                <div className="resume__creds-wrap">
                  <div className="resume__creds">
                    <div className="resume__creds-content">
                      <Avatar
                        alt="User"
                        src="/static/images/avatar/1.jpg"
                        onClick={() => console.log(item)}
                      />
                      <p className="resume__name">{item.name}</p>
                      <p className="resume__name">{item.secondName}</p>
                    </div>
                  </div>
                  <div className="resume__extracreds">
                    <p className="resume__extracred">{item.generalInfo}</p>
                    <p className="resume__extracred">
                      Email: <span className="profile__span">{item.email}</span>
                    </p>
                    <p className="resume__extracred">
                      Date of birth:{' '}
                      <span className="profile__span">{item.dateOfBirth}</span>
                    </p>
                    <p className="resume__extracred">
                      Phone:{' '}
                      <span className="profile__span">{item.contacts}</span>
                    </p>
                    <p className="resume__extracred">
                      Gender:{' '}
                      <span className="profile__span">{item.gender}</span>
                    </p>
                    <p className="resume__extracred">
                      Country:{' '}
                      <span className="profile__span">{item.country}</span>
                    </p>
                    <p className="resume__extracred">
                      Place of education:{' '}
                      <span className="profile__span">
                        {item.placeOfEducation}
                      </span>
                    </p>
                    <p className="resume__extracred">
                      Reriod of education:{' '}
                      <span className="profile__span">
                        {item.periodOfEducation}
                      </span>
                    </p>
                    <p className="resume__extracred">
                      Specialization:{' '}
                      <span className="profile__span">
                        {item.specialization}
                      </span>
                    </p>
                    <p className="resume__extracred">
                      Previous company:{' '}
                      <span className="profile__span">{item.prevCompany}</span>
                    </p>
                    <p className="resume__extracred">
                      Period of work:{' '}
                      <span className="profile__span">{item.periodOfWork}</span>
                    </p>
                    <p className="resume__extracred">
                      Previous company:{' '}
                      <span className="profile__span">{item.prevCompany}</span>
                    </p>
                    <p className="resume__extracred">
                      Profession:{' '}
                      <span className="profile__span">{item.profession}</span>
                    </p>
                  </div>
                  <div className="res__btn-wrap">
                    <div className="res__btn-cont">
                      <Box sx={{ '& button': { m: 1 } }}>
                        <Button variant="contained" size="large">
                          Edit
                        </Button>
                      </Box>
                      <Box sx={{ '& button': { m: 1 } }}>
                        <Button variant="contained" size="large" onClick={() => deleteCV(item.id)}>
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
      )}
      {resumeList.length === 0 && (
        <h3 className="res__nores">You have no resume yet</h3>
      )}
    </div>
  )
}
export default ResumeFolder
