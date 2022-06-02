import React, { useState } from 'react'

export default function ResumeFolder () {
    const [resumeList, setResumeList] = useState('')
    return (
        <div className='resume'>
            {resumeList ? <div className='resume__wrap'></div> : <h3 className='res__nores'>You have no resume yet</h3>}
        </div>
    )
}