import React from "react";
import { useParams } from "react-router-dom"
import { getResume } from '../../api.tsx'

export const ResumePage: React.FC = () => {
    let resList = JSON.parse(localStorage.getItem('resume'))
    const params = useParams()
    let someCVs

    function getSomeResume () {
        getResume('Engineer')
        .then((data) => {
            someCVs = data.data
    //        resumes.forEach(item => resumesObj = item)
    //   //   const {name, secondName, dateOfBirth, gender, email, country, placeOfEducation, periodOfEducation, specialization, prevCompany, periodOfWork, profession, generalInfo, contacts} = resumesObj
    //      setSearchedResumes(resumesObj)
    //      setIsResumes('yes')
        })
        .catch((err) => {
          alert('Sorry')
        //   setIsResumes('no')
        })
      }
    return (
        <div className="respage">
        {someCVs.filter(({ id }) => id == params.id).map(({       
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