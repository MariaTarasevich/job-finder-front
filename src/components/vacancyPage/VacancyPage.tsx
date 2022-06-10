import React from "react";
import { useParams } from "react-router-dom"

export const VacancyPage: React.FC = () => {
    let vacList = JSON.parse(localStorage.getItem('vacancy'))
    const params = useParams()
    return (
        <div className="vacpage">
        {vacList.filter(({ id }) => id == params.id).map(({      
            id,       
            title,
            salary,
            reqExperience,
            schedule,
            city,
            generalInfo,
            contacts,}) => {
            return (
                <div className="vacpage__wrap" key={id}>
                    <h3>{title}</h3>
                </div>
            )})}
            </div>
    )
}