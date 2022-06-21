import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { createVacancy } from '../../api.tsx'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

const ResumeConstructor: React.FC = () => {
  const [correctPhone, setCorrectPhone] = useState<boolean>(false)
  const top100Films = [{ title: 'Terminator' }, { title: 'Manager' }]
  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option: FilmOptionType) => option.title
  }

  function collectVacs(values) {
    if (!correctPhone) return
    createVacancy(values)
      .then(() => {
        console.log('OKEY')
      })
      .catch(() => {
        console.log('ERROR')
      })
    if (correctPhone) { resetForm() }
    setCorrectPhone(false)
  }

  const resetForm = () => {
    const input = document.querySelectorAll('input')
    input.forEach(function (item) {
      item.value = ''
    })
  }

  function validatePhone (value) {
    let error
    const re = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/
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
            contacts: ''
          }}
          validateOnBlur
        >
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
                        <label htmlFor={'title'}>Vacancy title (choose required specialization)</label>
                        <br />
                        <Autocomplete
                          {...defaultProps}
                          className='constr__spec'
                          id="disable-close-on-select"
                          disableCloseOnSelect
                          value={values.title}
                          renderInput={(params) => (
                            <TextField {...params} label="Specialization" variant="outlined" />
                          )}
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
                        <TextareaAutosize
                          aria-label="empty textarea"
                          onChange={handleChange}
                          name={'generalInfo'}
                          onBlur={handleBlur}
                          value={values.generalInfo}
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
                      <div className="constr_btns-wrap">
                        <Box sx={{ '& button': { m: 1 } }}>
                          <Button
                            variant="contained"
                            size="large"
                            onClick={() => { validatePhone(values.contacts); collectVacs(values) }}
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
        </Formik>
      </div>
    </div>
  )
}
export default ResumeConstructor
