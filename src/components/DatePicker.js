import { ErrorMessage, Field } from 'formik';
import React from 'react'
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextError from './TextError';

function DatePicker(props) {
   const { name, label, ...rest } = props

   return (
      <div className='form-control'>
         <label htmlFor={name}>{label}</label>
         <Field name={name}>
            {
               ({ form, field }) => {
                  const { setFieldValue } = form
                  const { value } = field
                  return (
                     <DateView
                        id={name}
                        {...field}
                        {...rest}
                        selected={value}
                        onChange={(val) => setFieldValue(name, val)} />
                  )
               }
            }
         </Field>
         <ErrorMessage name={name} component={TextError}></ErrorMessage>
      </div>
   )
}

export default DatePicker