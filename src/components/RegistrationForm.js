import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const radioOptions = [
   { key: 'Male', value: 'male' },
   { key: 'Female', value: 'female' }
]
const checkboxoptions = [
   { key: 'Matric', value: 'matric' },
   { key: 'Intermediate', value: 'intermediate' },
   { key: 'Graduation', value: 'graduation' },
]
const selectOptions=[
   { key: 'Select your province', value: '' },
   { key: 'Punjab', value: 'punjab' },
   { key: 'Sindh', value: 'sindh'},
   { key: 'Kpk', value: 'kpk' },

]
const initialValues = {
   firstName: '',
   lastName: '',
   gender: '',
   birthDate: null,
   email: '',
   qualification: [],
   address: '',
   province: '',
   password: '',
   confirmPassword: ''
}
const validationSchema = Yup.object({
   firstName: Yup.string().required('required'),
   lastName: Yup.string().required('required'),
   gender: Yup.string().required('required'),
   birthDate: Yup.date().required('required').nullable(),
   email: Yup.string().required().email('invalid email'),
   qualification: Yup.array().min(1, 'required'),
   address: Yup.string().required('required'),
   province: Yup.string().required('required'),
   password: Yup.string().required().min(8),
   confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'passwords do not match').required('required')
})
const onSubmit = (values) => {
   console.log('form data', values)
}
function RegistrationForm() {
   
   return (
      <div className='form-control'>
         <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit} >
            {
               formik => {
                  return <Form>
                     <FormikControl control='input' name='firstName' label='First Name' />
                     <FormikControl control='input' name='lastName' label='Last Name' />
                     <FormikControl control='radio' name='gender' label='Gender:' options={radioOptions} />
                     <FormikControl control='date' name='birthDate' label='Enter your DOB' placeholder='mm/dd/yyyy' />
                     <FormikControl control='input' type='email' name='email' label='Email' />
                     <FormikControl control='checkbox' name='qualification' label='Qualification:' options={checkboxoptions} />
                     <FormikControl control='input' as='textarea' name='address' label='Address' placeholder='min 50 words' />
                     <FormikControl control='select' name='province' label='Select your Province:' options={selectOptions} />
                     <FormikControl control='input' name='password' label='Password' />
                     <FormikControl control='input' name='confirmPassword' label='Confirm Password' />
                     <button type='submit' disabled={!formik.isValid}>Submit</button>
                  </Form>
               }
            }
         </Formik>
      </div>


   )
}

export default RegistrationForm