import React from "react";
import { useParams } from "react-router-dom"

export const ResumePage = () => {
    let resList = JSON.parse(localStorage.getItem('resume'))
    const params = useParams()
    return (
        <div className="respage">
        {resList.filter(({ id }) => id == params.id).map(({       
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