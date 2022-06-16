import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Avatar from '@mui/material/Avatar'
import { getAllResumes } from '../../api.tsx'
import './ResumePage.css'

export const ResumePage: React.FC = () => {
  const [resumeList, setResumeList] = useState([])
    const params = useParams()
    let allCVs
    

    function getSomeResume () {
      getAllResumes()
        .then((data) => {
          allCVs = data.data
          setResumeList(allCVs)
        })
        .catch((err) => {
          alert(err)
        })
      }
      useEffect(()=>getSomeResume(), [])
    return (
        <div className="respage">
        {resumeList.filter(({ id }) => id == params.id).map(({       
              id,      
              name,
              secondName,
              dateOfBirth,
              gender,
              email,
              country,
              placeOfEducation,
              periodOfEducation,
              specialization,
              prevCompany,
              periodOfWork,
              profession,
              generalInfo,
              contacts}) => {
            return (
                <div className="respage__wrap" key={id}>
                     <div className="resume__content" >
                <div className="resume__creds-wrap">
                  <div className="resume__creds">
                    <div className="resume__creds-content">
                      <Avatar
                        alt="User"
                        src="/static/images/avatar/1.jpg"
                      />
                      <p className="resume__name">{name}</p>
                      <p className="resume__name">{secondName}</p>
                    </div>
                  </div>
                  <div className="resume__extracreds">
                    <p className="resume__extracred">{generalInfo}</p>
                    <p className="resume__extracred">
                      Email: <span className="profile__span">{email}</span>
                    </p>
                    <p className="resume__extracred">
                      Date of birth:{' '}
                      <span className="profile__span">{dateOfBirth}</span>
                    </p>
                    <p className="resume__extracred">
                      Phone:{' '}
                      <span className="profile__span">{contacts}</span>
                    </p>
                    <p className="resume__extracred">
                      Gender:{' '}
                      <span className="profile__span">{gender}</span>
                    </p>
                    <p className="resume__extracred">
                      Country:{' '}
                      <span className="profile__span">{country}</span>
                    </p>
                    <p className="resume__extracred">
                      Place of education:{' '}
                      <span className="profile__span">
                        {placeOfEducation}
                      </span>
                    </p>
                    <p className="resume__extracred">
                      Reriod of education:{' '}
                      <span className="profile__span">
                        {periodOfEducation}
                      </span>
                    </p>
                    <p className="resume__extracred">
                      Specialization:{' '}
                      <span className="profile__span">
                        {specialization}
                      </span>
                    </p>
                    <p className="resume__extracred">
                      Previous company:{' '}
                      <span className="profile__span">{prevCompany}</span>
                    </p>
                    <p className="resume__extracred">
                      Period of work:{' '}
                      <span className="profile__span">{periodOfWork}</span>
                    </p>
                    <p className="resume__extracred">
                      Previous company:{' '}
                      <span className="profile__span">{prevCompany}</span>
                    </p>
                    <p className="resume__extracred">
                      Profession:{' '}
                      <span className="profile__span">{profession}</span>
                    </p>
                  </div>
                </div>
              </div>
                </div>
            )})}
            </div>
    )
}