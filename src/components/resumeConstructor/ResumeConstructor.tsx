import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { string } from 'yup'
// import TextField from '@mui/material/TextField'
import TextareaAutosize from '@mui/material/TextareaAutosize'
// import Autocomplete from '@mui/material/Autocomplete'

import { createResume } from '../../api.tsx'

import './ResumeConstructor.css'

const ResumeConstructor: React.FC = () => {
  const [correctEmail, setCorrectEmail] = useState<boolean>(false)
  const [correctPhone, setCorrectPhone] = useState<boolean>(false)
  // const top100Films = [{ title: 'Terminator' }, { title: 'Manager' }]
  // const defaultProps = {
  //   options: top100Films,
  //   getOptionLabel: (option/* : FilmOptionType */) => option.title
  // }

  function collectCVs (values) {
    createResume(values)
      .then(() => {
        console.log('OKEY')
        console.log(values)
      })
      .catch(() => {
        console.log('ERROR')
      })

    if (correctEmail || correctPhone) { resetForm() }
    setCorrectEmail(false)
    setCorrectPhone(false)
  }

  const resetForm = () => {
    const input = document.querySelectorAll('input')
    input.forEach(function (item) {
      item.value = ''
    })
  }

  interface resumeFormValues {
    id: string,
    name: string,
    secondName: string,
    dateOfBirth: string,
    gender: string,
    email: string,
    country: string,
    placeOfEducation: string,
    startOfEducation: string,
    endOfEducation: string,
    specialization: string,
    prevCompany: string,
    startOfWork: string,
    endOfWork: string,
    profession: string,
    generalInfo: string,
    contacts: string,
  }

  function validateEmail (value) {
    let error
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!value) {
      error = 'Required'
      alert('Insert email')
    } else if (!re.test(value)) {
      alert('Invalid email address')
      error = 'Invalid email address'
    } else {
      alert('OK')
      setCorrectPhone(true)
    }
    return error
  }

  function validatePhone (value) {
    let error
    const re = /^[1-9]+[0-9]*$/
    if (!value) {
      error = 'Required'
      alert('Insert phone')
    } else if (!re.test(value)) {
      alert('Invalid phone number')
      error = 'Invalid phone number'
    } else {
      alert('OK')
      setCorrectPhone(true)
    }
    return error
  }

  const initialValues: resumeFormValues = {
    id: '',
    name: '',
    secondName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    country: '',
    placeOfEducation: '',
    startOfEducation: '',
    endOfEducation: '',
    specialization: '',
    prevCompany: '',
    startOfWork: '',
    endOfWork: '',
    profession: '',
    generalInfo: '',
    contacts: ''
  }

  const inpStyle = {
    textTransform: 'lowercase'
  }

  return (
    <div className="constr">
      <div className="constr__wrap">
        <h3 className="resume__title">Create your resume here!</h3>
        <Formik onSubmit={() => console.log('adssa')}
          initialValues={initialValues}
          validateOnBlur
        >
          <Formik
            onSubmit={() => console.log('adssa')}
            initialValues={{
              id: string,
              name: string,
              secondName: string,
              dateOfBirth: string,
              gender: string,
              email: string,
              country: string,
              placeOfEducation: string,
              startOfEducation: string,
              endOfEducation: string,
              specialization: string,
              prevCompany: string,
              startOfWork: string,
              endOfWork: string,
              profession: string,
              generalInfo: string,
              contacts: string
            }}
          >
            {({
              values,
              handleChange,
              handleBlur,
              isValid,
              dirty
            }) => (
              <Form>
                <div className="form-group form-check">
                  <div className="form-group">
                    <div className={'from'}>
                      <p>
                        <label htmlFor={'name'}>Name *</label>
                        <br />
                        <input
                          className={'input resumeInput'}
                          type={'text'}
                          name={'name'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          required
                        />
                      </p>
                      <p>
                        <label htmlFor={'secondName'}>Surname *</label>
                        <br />
                        <input
                          className={'input resumeInput'}
                          type={'text'}
                          name={'secondName'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.secondName}
                          required
                        />
                      </p>
                      <p>
                        <label htmlFor={'dateOfBirth'}>Date of birth *</label>
                        <br />
                        <input
                          className={'input resumeInput'}
                          type={'text'}
                          name={'dateOfBirth'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.dateOfBirth}
                          required
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
                      <p>
                        <label htmlFor={'email'}>Email *</label>
                        <br />
                        <input
                          className={'input resumeInput'}
                          type={'email'}
                          name={'email'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          required
                        />
                      </p>
                      <p>
                        <label htmlFor={'country'}>Country *</label>
                        <br />
                        <input
                          className={'input resumeInput'}
                          type={'text'}
                          name={'country'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.country}
                          required
                        />
                      </p>
                      <p>
                        <label htmlFor={'placeOfEducation'}>
                          Place of education
                        </label>
                        <br />
                        <input
                          className={'input resumeInput'}
                          type={'text'}
                          name={'placeOfEducation'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.placeOfEducation}
                        />
                      </p>
                      <p>
                        <label htmlFor={'startOfEducation'}>
                          Period of education (start)
                        </label>
                        <br />
                        <input
                          className={'input resumeInput'}
                          type={'text'}
                          name={'startOfEducation'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.startOfEducation}
                        />
                      </p>
                      <p>
                        <label htmlFor={'endOfEducation'}>
                          Period of education (end)
                        </label>
                        <br />
                        <input
                          className={'input resumeInput'}
                          type={'text'}
                          name={'endOfEducation'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.endOfEducation}
                        />
                      </p>
                      {/* <Autocomplete
                        {...defaultProps}
                        className='constr__spec'
                        id="controlled-demo"
                        disableCloseOnSelect
                        onChange={handleChange}
                        value={values.specialization}
                        renderInput={(params) => (
                          <TextField {...params} label="Specialization" variant="outlined" />
                        )}
                      /> */}
                        <label htmlFor={'specialization'}>Specialization</label>
                        <br />
                        <input
                          className={'input resumeInput'}
                          type={'text'}
                          name={'specialization'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.specialization}
                        />
                      <p>
                        <label htmlFor={'prevCompany'}>Previous company</label>
                        <br />
                        <input
                          className={'input resumeInput'}
                          type={'text'}
                          name={'prevCompany'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.prevCompany}
                        />
                      </p>
                      <p>
                        <label htmlFor={'startOfWork'}>Period of work (start)</label>
                        <br />
                        <input
                          className={'input resumeInput'}
                          type={'text'}
                          name={'startOfWork'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.startOfWork}
                        />
                      </p>
                      <p>
                        <label htmlFor={'endOfWork'}>Period of work (end)</label>
                        <br />
                        <input
                          className={'input resumeInput'}
                          type={'text'}
                          name={'endOfWork'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.endOfWork}
                        />
                      </p>
                      <p>
                        <label htmlFor={'profession'}>Profession *</label>
                        <br />
                        <input
                          className={'input resumeInput'}
                          type={'text'}
                          name={'profession'}
                          style={inpStyle}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.profession}
                          required
                        />
                      </p>
                      <p>
                        <label htmlFor={'generalInfo'}>
                          General information
                        </label>
                        <br />
                        <TextareaAutosize
                          name={'generalInfo'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.generalInfo}
                          aria-label="empty textarea"
                          style={{ width: '100%' }}
                        />
                      </p>
                      <p>
                        <label htmlFor={'contacts'}>Phone</label>
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
                      <p className='constr__req-info'>* is for required fields</p>
                      <div className="constr_btns-wrap">
                        <Box sx={{ '& button': { m: 1 } }}>
                          <Button
                            variant="contained"
                            size="large"
                            onClick={() => { validateEmail(values.email); validatePhone(values.contacts); collectCVs(values) }}
                            className={`sign-in__btn btn btn-primary mr-2 ${dirty && isValid ? '' : 'disabled-btn'
                              }`}
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
        </Formik>
      </div>
    </div>
  )
}
export default ResumeConstructor
