import React, { useState, useEffect } from 'react'
import { Formik, Form } from 'formik'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import { createEmployerProfile, getCompamnyProfile, deleteCompanyProf } from './../../api.tsx'

import './EmployerProfile.css'

const EmployerProfile: React.FC = () => {
  const [isProfile, setIsProfile] = useState<boolean>(true)
  const [createProfile, setCreateProfile] = useState<boolean>(false)
  const [noProf, setNoProf] = useState<boolean>(true)
  const [localProfile, setLocalProfile] = useState('')
  let prof
  const companyProf = {
    name: '',
    email: '',
    address: '',
    phone: '',
    aboutCompany: ''
  }

  function collectProfileData (values) {
    createEmployerProfile(values)
      .then(() => {
        console.log('OKEY')
      })
      .catch(err => {
        console.log(err, isProfile, companyProf)
      })
  }

  const resetForm = () => {
    const input = document.querySelectorAll('input')
    input.forEach(function (item) {
      item.value = ''
    })
  }

  const getProfile = () => {
    getCompamnyProfile()
      .then(data => {
        prof = data.data
        setLocalProfile(prof)
        console.log(localProfile)
      })
      .catch(() => {
        console.log('ERR')
      })
  }

  const deleteProf = (id) => {
    deleteCompanyProf(id)
      .then(() => {
        console.log('Deleted')
        window.location.reload()
      })
      .catch(() => {
        console.log('error')
      })
  }

  useEffect(() => { getProfile(); console.log(Boolean(localProfile), typeof (localProfile)) }, [])
  return (
    <div className="company__wrap">
      {localProfile && (localProfile.map((item, index) => {
        return (
          <div className="company" key={index}>
            <div className="company__creds-wrap">
              <div className="company__creds">
                <Avatar alt="User" src="/static/images/avatar/1.jpg" />
                <p className="company__name">{item.name}</p>
              </div>
              <div className="company__extracreds">
                <p className="company__extracred">
                  Email: <span className="company__span">{item.email}</span>
                </p>
                <p className="company__extracred">
                  Address: <span className="company__span">{item.address}</span>
                </p>
                <p className="company__extracred">
                  Phone: <span className="company__span">{item.phone}</span>
                </p>
                <p className="company__extracred">
                  About company: <span className="company__span">{item.aboutCompany}</span>
                </p>

              </div>
            </div>
            <div className='profile__wrap-btns'>
              <Box sx={{ '& button': { m: 1 } }}>
                <Button variant="contained" size="large">
                  Edit
                </Button>
              </Box>
              <Box sx={{ '& button': { m: 1 } }}>
                <Button variant="contained" size="large" onClick={() => { deleteProf(3); setLocalProfile(''); setNoProf(true) }}>
                  delete
                </Button>
              </Box>
            </div>
          </div>)
      }))}
      {!localProfile && noProf && (
        <div className='noprof__wrap'><h3 className='noprof__title'>You have no profile yet</h3>
          <Box sx={{ '& button': { m: 1 } }}>
            <Button variant="contained" size="large" onClick={() => { setCreateProfile(true); setNoProf(false) }}>
              Create profile
            </Button>
          </Box>
        </div>
      )}
      {createProfile && (
        <div className='createprof__wrap'>
          <Formik
            initialValues={{
              acceptTerms: false
            }}
          >
            {({
              values,
              handleChange,
              handleBlur
            }) => (
              <Form>
                <div className="form-group form-check">
                  <div className="form-group">
                    <div className={'from'}>
                      <p>
                        <label htmlFor={'name'}>Company name</label>
                        <br />
                        <input
                          className={'input resumeInput'}
                          type={'text'}
                          name={'name'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                        />
                      </p>
                      <p>
                        <label htmlFor={'email'}>Email</label>
                        <br />
                        <input
                          className={'input resumeInput'}
                          type={'text'}
                          name={'email'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                      </p>
                      <p>
                        <label htmlFor={'address'}>Address</label>
                        <br />
                        <input
                          className={'input resumeInput'}
                          type={'text'}
                          name={'address'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.address}
                        />
                      </p>
                      <p>
                        <label htmlFor={'phone'}>Phone</label>
                        <br />
                        <input
                          className={'input resumeInput'}
                          type={'text'}
                          name={'phone'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phone}
                        />
                      </p>
                      <p>
                        <label htmlFor={'aboutCompany'}>
                          About company
                        </label>
                        <br />
                        <textarea
                          name={'aboutCompany'}
                          className="resumeTextarea"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.aboutCompany}
                        />
                      </p>
                      <div className="constr_btns-wrap">
                        <Box sx={{ '& button': { m: 1 } }}>
                          <Button
                            variant="contained"
                            size="large"
                            onClick={() => { setIsProfile(true); setCreateProfile(false); collectProfileData(values); setLocalProfile(values) }}
                            className={'sign-in__btn btn btn-primary mr-2'}
                          >
                            Save
                          </Button>
                        </Box>
                        <Box sx={{ '& button': { m: 1 } }}>
                          <Button
                            variant="contained"
                            size="large"
                            type="reset"
                            className="btn btn-secondary constr___reset-btn"
                            onClick={() => resetForm()}
                          >
                            Reset
                          </Button>
                        </Box>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      )
      }
    </div>
  )
}

export default EmployerProfile
