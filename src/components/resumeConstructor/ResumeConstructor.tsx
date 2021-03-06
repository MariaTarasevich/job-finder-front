import React from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import './ResumeConstructor.css'
import { nanoid } from 'nanoid'

export default function ResumeConstructor() {
  function collectCVs (values) {
    let resList = []
    let loc = localStorage.getItem('resume')
    if (loc) {
      resList = JSON.parse(localStorage.getItem('resume'))
      resList.push(values)
    } else {
      resList.push(values)
    }
    console.log(resList)

    localStorage.setItem('resume', JSON.stringify(resList))
  }

  const resetForm = () => {
    const input = document.querySelectorAll('input')
    input.forEach(function (item) {
      item.value = ''
    })
  }

  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required';
      alert('Insert email')
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      alert('Invalid email address')
      error = 'Invalid email address';
    }
    return error;
  }

  return (
    <div className="constr">
      <div className="constr__wrap">
        <h3 className="resume__title">Create your resume here!</h3>
        <Formik
          initialValues={{
            id: '',
            name: '',
            secondName: '',
            dateOfBirth: '',
            gender: '',
            email: '',
            country: '',
            placeOfEducation: '',
            periodOfEducation: '',
            specialization: '',
            prevCompany: '',
            periodOfWork: '',
            profession: '',
            generalInfo: '',
            contacts: '',
          }}
          validateOnBlur
        >
          <Formik
            initialValues={{
              acceptTerms: false,
            }}
            validationSchema={yup.object().shape({
              acceptTerms: yup
                .bool()
                .oneOf([true], 'Accept Terms & Conditions is required'),
            })}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              isValid,
              handleSubmit,
              dirty,
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
                        <label htmlFor={'periodOfEducation'}>
                          Period of education
                        </label>
                        <br />
                        <input
                          className={'input resumeInput'}
                          type={'text'}
                          name={'periodOfEducation'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.periodOfEducation}
                        />
                      </p>
                      <p>
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
                      </p>
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
                        <label htmlFor={'periodOfWork'}>Period of work</label>
                        <br />
                        <input
                          className={'input resumeInput'}
                          type={'text'}
                          name={'periodOfWork'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.periodOfWork}
                        />
                      </p>
                      <p>
                        <label htmlFor={'profession'}>Profession *</label>
                        <br />
                        <input
                          className={'input resumeInput'}
                          type={'text'}
                          name={'profession'}
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
                      <p className='constr__req-info'>* is for requires fields</p>
                      <div className="constr_btns-wrap">
                        <Box sx={{ '& button': { m: 1 } }}>
                          <Button
                            variant="contained"
                            size="large"
                            onClick={()=>{ values.id= nanoid(); collectCVs(values)}}
                            className={`sign-in__btn btn btn-primary mr-2 ${
                              dirty && isValid ? '' : 'disabled-btn'
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
