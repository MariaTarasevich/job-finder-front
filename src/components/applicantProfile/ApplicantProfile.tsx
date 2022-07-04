import React, { useEffect, useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Formik, Form } from 'formik'

import { createApplicantProfile, getApplicantProfile, deleteApplicantProf } from './../../api.tsx'

import './ApplicantProfile.css'

export default function ApplicantProfile () {
  const [isProfile, setIsProfile] = useState<boolean>(true)
  const [createProfile, setCreateProfile] = useState<boolean>(false)
  const [noProf, setNoProf] = useState<boolean>(true)
  const [localProfile, setLocalProfile] = useState('')
  let applicProfile
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  function collectProfileData (values) {
    createApplicantProfile(values)
      .then(() => {
        console.log('OKEY')
      })
      .catch(err => {
        console.log(err, isProfile)
      })
  }

  const resetForm = () => {
    const input = document.querySelectorAll('input')
    input.forEach(function (item) {
      item.value = ''
    })
  }

  const getProfile = () => {
    getApplicantProfile()
      .then(data => {
        applicProfile = data.data
        setLocalProfile(applicProfile)
        console.log(localProfile)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const deleteProf = (id) => {
    deleteApplicantProf(id)
      .then(() => {
        console.log('Deleted')
        window.location.reload()
      })
      .catch(() => {
        console.log('error')
      })
  }

  useEffect(() => getProfile(), [])

  return (
    <div className="profile__wrap">
      {localProfile && (localProfile.map((item, index) => {
        return (
          <div className="profile" key={index}>
            <div className="profile__creds-wrap">
              <div className="profile__creds">
                <Avatar alt="User" src="/static/images/avatar/1.jpg" />
                <p className="profile__name">{item.name}</p>
                <p className="profile__name">{item.surname}</p>
              </div>
              <div className="profile__extracreds">
                <p className="profile__extracred">
                  Email: <span className="profile__span">{item.email}</span>
                </p>
                <p className="profile__extracred">
                  Age: <span className="profile__span">{item.age}</span>
                </p>
                <p className="profile__extracred">
                  Phone: <span className="profile__span">{item.phone}</span>
                </p>
                <p className="profile__extracred">
                  Gender: <span className="profile__span">{item.gender}</span>
                </p>
              </div>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {
                  isDragActive
                    ? <p>Drop the files here ...</p>
                    : <p>Drag n drop some files here, or click to select files</p>
                }
              </div>
            </div>
            <div className='profile__wrap-btns'>
              <Box sx={{ '& button': { m: 1 } }}>
                <Button variant="contained" size="large">
                  Edit
                </Button>
              </Box>
              <Box sx={{ '& button': { m: 1 } }}>
                <Button variant="contained" size="large" onClick={() => { deleteProf(1); setLocalProfile(''); setNoProf(true) }}>
                  delete
                </Button>
              </Box>
            </div>
          </div>)
      }))}
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
    </div >
  )
}
