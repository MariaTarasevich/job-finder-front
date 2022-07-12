import React, { useEffect, useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Formik, Form } from 'formik'

import { createApplicantProfile, getApplicantProfile, deleteApplicantProf } from 'api.tsx'

import './ApplicantProfile.scss'

export default function ApplicantProfile () {
  const [isProfile, setIsProfile] = useState<boolean>(true)
  const [createProfile, setCreateProfile] = useState<boolean>(false)
  const [noProf, setNoProf] = useState<boolean>(true)
  const [localProfile, setLocalProfile] = useState([])
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
      .then(db => {
        applicProfile = db.data
        console.log(applicProfile.length)
        setLocalProfile(applicProfile)
        console.log(db)
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
    {localProfile.length > 0 && (<div className='profcont__wrap'>{localProfile.map((item, index) => {
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

            </div>
            <div className='profile__wrap-btns'>
              <Box sx={{ '& button': { m: 1 } }}>
                <Button variant="contained" size="large">
                  Edit
                </Button>
              </Box>
              <Box sx={{ '& button': { m: 1 } }}>
                <Button variant="contained" size="large" onClick={() => { deleteProf(localProfile[0].id); setLocalProfile([]); setNoProf(true) }}>
                  delete
                </Button>
              </Box>
            </div>
          </div>
      )
    })}
      </div>)}
      {localProfile.length === 0 && noProf && (<div className='noprof__wrap'><h3 className='noprof__title'>You have no profile yet</h3>
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
              name: '',
              surname: '',
              email: '',
              age: '',
              phone: '',
              imgUrl: ''
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
                      <div {...getRootProps()}>
                <input {...getInputProps()} value={values.imgUrl}/>
                {
                  isDragActive
                    ? <p>Drop the files here ...</p>
                    : <p>Drag n drop some files here, or click to select files</p>
                }
              </div>
                      <div className="constr_btns-wrap">
                        <Box sx={{ '& button': { m: 1 } }}>
                          <Button
                            variant="contained"
                            size="large"
                            onClick={() => { setIsProfile(true); setCreateProfile(false); console.log(values); collectProfileData(values); setLocalProfile(values) }}
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
