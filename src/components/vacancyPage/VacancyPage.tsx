import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'

import { getVacs } from 'api.tsx'

import './VacancyPage.scss'

const VacancyPage: React.FC = () => {
  const [vacList, setVacList] = useState([])
  const params = useParams()
  let allVacs

  function getSomeResume () {
    getVacs()
      .then((data) => {
        allVacs = data.data
        setVacList(allVacs)
      })
      .catch((err) => {
        alert(err)
      })
  }

  useEffect(() => getSomeResume(), [])
  return (
      <div className="vacpage">
      {vacList.filter(({ id }) => id === params.id).map(({
        id,
        title,
        salary,
        reqExperience,
        schedule,
        city,
        generalInfo,
        contacts
      }) => {
        return (
              <div className="vac__content" key={id}>
                <div className="vac__creds-wrap">
                  <div className="vac__creds">
                    <div className="vac__creds-content">
                      <Avatar
                        alt="Company"
                        src="/static/images/avatar/1.jpg"
                        onClick={() => console.log(vacList)}
                      />
                      <p className="vac__name">{title}</p>
                    </div>
                  </div>
                  <div className="vac__extracreds">
                    <p className="vac__extracred">
                      <span className="vac__span"> Salary:</span>
                      {salary}
                    </p>
                    <p className="vac__extracred">
                      <span className="vac__span">Contacts:</span>
                      {contacts}
                    </p>
                    <p className="vac__extracred">
                      <span className="vac__span">
                        Required work experience:{' '}
                      </span>
                      {reqExperience}
                    </p>
                    <p className="vac__extracred">
                      <span className="vac__span">City: </span>
                      {city}
                    </p>
                    <p className="vac__extracred">
                      <span className="vac__span">Schedule:</span>
                      {schedule}
                    </p>
                    <p className="vac__extracred">{generalInfo}</p>
                  </div>
                  </div>
              </div>
        )
      })}
            </div>
  )
}

export default VacancyPage
