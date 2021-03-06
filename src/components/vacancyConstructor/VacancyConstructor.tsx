import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { nanoid } from 'nanoid'

export default function ResumeConstructor() {
 // const [vacList, setVacList] = useState([])

  function collectVacs (values) {
    let vacList = []
    let loc = localStorage.getItem('vacancy')
    if (loc) {
      vacList = JSON.parse(localStorage.getItem('vacancy'))
      vacList.push(values)
    } else {
      vacList.push(values)
    }
    console.log(vacList)

    localStorage.setItem('vacancy', JSON.stringify(vacList))
  }

  const resetForm = () => {
    const input = document.querySelectorAll('input')
    input.forEach(function (item) {
      item.value = ''
    })
  }

  return (
    <div className="constr">
      <div className="constr__wrap">
        <h3 className="vac__title">Create your vacancy here!</h3>
        <Formik
          initialValues={{
            id: '',
            title: '',
            salary: '',
            reqExperience: '',
            schedule: '',
            city: '',
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
                            onClick={()=>{values.id=nanoid(); collectVacs(values)}}
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
        </Formik>
      </div>
    </div>
  )
}
