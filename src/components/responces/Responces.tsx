import React, { useState } from 'react'

const Responces: React.FC = () => {
  const [res, setRes] = useState('')
  console.log(setRes)
  return (
    <div className='responces'>
        {res
          ? <div className='res__wrap'></div>
          : <h3 className='res__nores'>You have no responces yet</h3>}
    </div>
  )
}

export default Responces
