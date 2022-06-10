import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Formik, Form } from 'formik'
import './ApplicantProfile.css'

export default function ApplicantProfile() {
  const applicatProf = {
    name: '',
    surname: '',
    email: '',
    age: '',
    phone: 'gender'
  }
  const [isProfile, setIsProfile] = useState<boolean>(true)
  const [createProfile, setCreateProfile] = useState<boolean>(false)
  const [ noProf, setNoProf] = useState<boolean>(false)
  return (
    <div className="profile__wrap">{isProfile && (<div className="profile">
      <div className="profile__creds-wrap">
        <div className="profile__creds">
          <Avatar alt="User" src="/static/images/avatar/1.jpg" />
          <p className="profile__name">Name</p>
          <p className="profile__name">Surname</p>
        </div>
        <div className="profile__extracreds">
          <p className="profile__extracred">
            Email: <span className="profile__span">user@gmail.com</span>
          </p>
          <p className="profile__extracred">
            Age: <span className="profile__span">23</span>
          </p>
          <p className="profile__extracred">
            Phone: <span className="profile__span">+111-11-111-11-11</span>
          </p>
          <p className="profile__extracred">
            Gender: <span className="profile__span">Male</span>
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
          <Button variant="contained" size="large" onClick={() => {setIsProfile(false); setNoProf(true)}}>
            delete
          </Button>
        </Box>
      </div>
    </div>)}
      {!isProfile && noProf && (<div className='noprof__wrap'><h3 className='noprof__title'>You have no profile yet</h3>
        <Box sx={{ '& button': { m: 1 } }}>
          <Button variant="contained" size="large" onClick={() => {setCreateProfile(true); setNoProf(false)}}>
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
                        <label htmlFor={'title'}>Vacancy title</label>
                        <br />
                        <input
                          className={'input resumeInput'}
                          type={'text'}
                          name={'title'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.title}
                        />
                      </p>
                      <p>
                        <label htmlFor={'salary'}>Salary</label>
                        <br />
                        <input
                          className={'input resumeInput'}
                          type={'text'}
                          name={'salary'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.salary}
                        />
                      </p>
                      <p>
                        <label htmlFor={'reqExperience'}>Required work experience</label>
                        <br />
                        <input
                          className={'input resumeInput'}
                          type={'text'}
                          name={'reqExperience'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.reqExperience}
                        />
                      </p>
                      <p>
                        <label htmlFor={'schedule'}>Working schedule</label>
                        <br />
                        <input
                          className={'input resumeInput'}
                          type={'text'}
                          name={'schedule'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.schedule}
                        />
                      </p>
                      <p>
                        <label htmlFor={'city'}>City</label>
                        <br />
                        <input
                          className={'input resumeInput'}
                          type={'text'}
                          name={'city'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.city}
                        />
                      </p>
                      <p>
                        <label htmlFor={'generalInfo'}>
                          General information
                        </label>
                        <br />
                        <textarea
                          name={'generalInfo'}
                          className="resumeTextarea"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.generalInfo}
                        />
                      </p>
                      <p>
                        <label htmlFor={'contacts'}>Contacts</label>
                        <br />
                        <input
                          className={'input resumeInput'}
                          type={'text'}
                          name={'contacts'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.contacts}
                        />
                      </p>
                      <div className="constr_btns-wrap">
                        <Box sx={{ '& button': { m: 1 } }}>
                          <Button
                            variant="contained"
                            size="large"
                            onClick={() => {setIsProfile(true); setCreateProfile(false)}}
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
