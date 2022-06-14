import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom"
import { getVacs } from "../../api.tsx";

export const VacancyPage: React.FC = () => {
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
      useEffect(()=>getSomeResume(), [])
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