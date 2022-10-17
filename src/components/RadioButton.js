import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

function RadioButton(props) {
   const { label, name, options, ...rest } = props

   return (
      <div className='form-control'>
         <label>{label}</label>
         <Field name={name} {...rest}>
            {({ field }) => {
               return options.map((option) => {
                  return (
                     <React.Fragment key={option.key}>
                        <input
                           type='radio'
                           id={option.value}
                           {...field}
                           value={option.value}
                           checked={field.value === option.value}></input>
                        <label htmlFor={option.value}>{option.key}</label>
                     </React.Fragment>
                  )
               })
            }
            }
         </Field>
         <ErrorMessage name={name} component={TextError}></ErrorMessage>
      </div>
   )
}

export default RadioButton
