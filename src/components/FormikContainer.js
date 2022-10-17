import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const dropdownOptions = [
   { key: 'Select option', value: '' },
   { key: 'MALE', value: 'male' },
   { key: 'FEMALE', value: 'female' }
]
const radioOptions = [
   { key: 'ISLAM', value: 'islam' },
   { key: 'CHRISTIANITY', value: 'christianity' },
   { key: 'JUDAISM', value: 'judaism' }
]
const checkboxOptions = [
   { key: 'physics', value: 'physics' },
   { key: 'chemistry', value: 'chemistry' },
   { key: 'mathematics', value: 'mathematics' }
]
const initialValues = {
   email: '',
   address: '',
   gender: '',
   religion: '',
   subjects: [],
   birthdate: null
}
const validationSchema = Yup.object({
   email: Yup.string().required('Email is required'),
   address: Yup.string().required('Address is necessary'),
   gender: Yup.string().required('Please Select your Gender'),
   religion: Yup.string().required('Please Select your Religion'),
   subjects: Yup.array().min(1, 'Required'),
   birthdate: Yup.date().required('Select your DOB').nullable()
})
const onSubmit = values => console.log('form data', values)

function FormikContainer() {
   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmit}>
         {
            formik =>
               <Form>
                  <FormikControl control='input' type='email' name='email' label='Email' />
                  <FormikControl control='textarea' label='Address' name='address' />
                  <FormikControl control='select' label='Select your Gender' name='gender' options={dropdownOptions} />
                  <FormikControl control='radio' label='Select your Religion' name='religion' options={radioOptions} />
                  <FormikControl control='checkbox' label='Subjects Studied' name='subjects' options={checkboxOptions} />
                  <FormikControl control='date' label='Enter your Date of Birth' name='birthdate' />
                  <button type='submit'>Submit</button>
               </Form>
         }
      </Formik>
   )
}
export default FormikContainer