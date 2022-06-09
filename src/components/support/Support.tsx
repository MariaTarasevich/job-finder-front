import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import './Support.css'

export default function Support() {
    const [ supMessages, setSupMessages ] = useState('')

  function getEl() {
    const elem = document.querySelector('input')
    console.log(elem.value)
  }

  return (
    <div className="support">
      <div className="support__wrap">
          {supMessages ? '' : <p className='support__no-messages'>You haven't asked anything before</p> }
          <div className='support__bot-wrap'>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField label="Write your question" color="secondary" focused />
        </Box>
        <Box sx={{ '& button': { m: 1 } }}>
          <Button variant="contained" size="large" className='support__send-btn' onClick={() => getEl()}>
            Send
          </Button>
        </Box>
        </div>
      </div>
    </div>
  )
}
