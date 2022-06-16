import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Formik, Form } from 'formik'
import './ApplicantProfile.css'

export default function ApplicantProfile() {

  const [isProfile, setIsProfile] = useState<boolean>(true)
  const [createProfile, setCreateProfile] = useState<boolean>(false)
  const [noProf, setNoProf] = useState<boolean>(true)
  const [localProfile, setLocalProfile] = useState('')


  const applicatProf = {
    name: '',
    surname: '',
    email: '',
    age: '',
    phone: '',
    gender: ''
  }

  useEffect(() => {
    setLocalProfile(JSON.parse(localStorage.getItem('applicantProfile')))
  }, [])
  return (
    <div className="profile__wrap">
      {localProfile && (<div className="profile">
 <div className="profile__creds-wrap">
        <div className="profile__creds">
          <Avatar alt="User" src="/static/images/avatar/1.jpg" />
          <p className="profile__name">{localProfile.name}</p>
          <p className="profile__name">{localProfile.surname}</p>
        </div>
        <div className="profile__extracreds">
          <p className="profile__extracred">
            Email: <span className="profile__span">{localProfile.email}</span>
          </p>
          <p className="profile__extracred">
            Age: <span className="profile__span">{localProfile.age}</span>
          </p>
          <p className="profile__extracred">
            Phone: <span className="profile__span">{localProfile.phone}</span>
          </p>
          <p className="profile__extracred">
            Gender: <span className="profile__span">{localProfile.gender}</span>
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
          <Button variant="contained" size="large" onClick={() => { setLocalProfile('');  localStorage.clear(); setNoProf(true)}}>
            delete
          </Button>
        </Box>
      </div>
    </div>)}
      {!localProfile && noProf && (<div className='noprof__wrap'><h3 className='noprof__title'>You have no profile yet</h3>
        <Box sx={{ '& button': { m: 1 } }}>
          <Button variant="contained" size="large" onClick={() => { setCreateProfile(true); setNoProf(false) }}>
            Create profile
          </Button>
        </Box></div>
      )}
      {createProfile && (
        <div className='createprof__wrap'>
          <Formik
            initialValues={{
              acceptTerms: false,
            }}
          >
            {({
              values,
              handleChange,
              handleBlur,
            }) => (
              <Form>
                <div className="form-group form-check">
                  <div className="form-group">
                    <div className={'from'}>
                      <p>
                        <label htmlFor={'name'}>Name</label>
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
                        <label htmlFor={'surname'}>Surname</label>
                        <br />
                        <input
                          className={'input resumeInput'}
                          type={'text'}
                          name={'surname'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.surname}
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
                        <label htmlFor={'age'}>Age</label>
                        <br />
                        <input
                          className={'input resumeInput'}
                          type={'text'}
                          name={'age'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.age}
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
                        <label htmlFor={'gender'}>Gender</label>
                        <br />
                        <input
                          className={'input resumeInput'}
                          type={'text'}
                          name={'gender'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.gender}
                        />
                      </p>
                      <div className="constr_btns-wrap">
                        <Box sx={{ '& button': { m: 1 } }}>
                          <Button
                            variant="contained"
                            size="large"
                            onClick={() => { setIsProfile(true); setCreateProfile(false); localStorage.setItem('applicantProfile', JSON.stringify(values)); setLocalProfile(values) }}
                            className={`sign-in__btn btn btn-primary mr-2`}
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
    </div >
  )
}
