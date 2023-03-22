import { Formik } from 'formik'
import React, { useState } from 'react'

import useEmail from '../hooks/useEmail'
import ContactForm from './ContactForm'

const initialValues = { email: '', name: '', message: '' }

export const Contact = () => {
  const [isSubmitting, setSubmitting] = useState(false)
  const send = useEmail()

  return (
    <Formik
      setSubmitting={setSubmitting}
      isSubmitting={isSubmitting}
      initialValues={initialValues}
      validate={(values) => {
        const errors = {}
        if (!values.email) {
          errors.email = 'Pakollinen'
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address'
        }
        if (!values.message) {
          errors.message = 'Pakollinen'
        }
        if (!values.name) {
          errors.name = 'Pakollinen'
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true)
        send(values).then(() => {
          setSubmitting(false)
          resetForm()
        })
      }}
    >
      {({ isSubmitting }) => <ContactForm isSubmitting={isSubmitting} />}
    </Formik>
  )
}
