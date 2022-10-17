import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function LoginForm() {

   const initialValues = {
      email: '',
      password: ''
   }
   const validationSchema = Yup.object({
      email: Yup.string().email('invalid email format').required('required'),
      password: Yup.string().required('required')
   })
   const onSubmit = (values) => {
      console.log('form data', values)
   }
   return (
      <div className='form-control'>
         <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {formik => {
               return <Form>
                  <FormikControl
                     control='input'
                     label='E-mail'
                     name='email'
                     type='email'
                  />
                  <FormikControl
                     control='input'
                     label='Password'
                     name='password'
                     type='password'
                  />
                  <button type='submit' >Submit</button>
               </Form>
            }}
         </Formik>
      </div>
   )
}

export default LoginForm