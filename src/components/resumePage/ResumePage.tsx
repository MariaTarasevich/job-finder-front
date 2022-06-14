import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getAllResumes } from '../../api.tsx'

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
                    <h3>{name}</h3>
                </div>
            )})}
            </div>
    )
}