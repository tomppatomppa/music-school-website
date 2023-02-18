import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import LoadingSpinner from './LoadingSpinner'

const Modal = ({ open, closeModal }) => {
  const [isSubmitting, setSubmitting] = useState(false)

  const handleSubmitForm = (values) => {
    console.log('send form', values)
  }

  return (
    <div
      className={`${
        open ? 'visible' : 'hidden'
      } fixed   z-50  h-full w-full backdrop:bg-black   backdrop-blur-sm text-black`}
    >
      <div className="flex justify-center ">
        <Formik
          setSubmitting={setSubmitting}
          isSubmitting={isSubmitting}
          initialValues={{ email: '', name: '', message: '' }}
          validate={(values) => {
            const errors = {}
            if (!values.email) {
              errors.email = 'Required'
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address'
            }
            if (!values.message) {
              errors.message = 'Required'
            }
            if (!values.name) {
              errors.name = 'Required'
            }
            return errors
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true)
            setTimeout(() => {
              handleSubmitForm(values)
              alert(JSON.stringify('Yhteydenotto pyyntö lähetetty', null, 2))
              setSubmitting(false)
              resetForm()
              closeModal()
            }, 400)
          }}
        >
          {({ isSubmitting }) => (
            <Form className="grid  text-left   bg-zinc-200 grid-cols-[auto,1fr] items-center  gap-y-3 gap-x-10 max-w-lg my-8 mx-auto p-5 rounded-md shadow-lg ">
              <label className="whitespace-nowrap"> Sähköposti </label>
              <LoadingSpinner enabled={isSubmitting} />
              <div>
                <Field
                  placeholder="Sähköposti"
                  className="py-2 px-3 border border-gray-300 rounded-md"
                  type="email"
                  name="email"
                />
                <ErrorMessage name="email">
                  {(msg) => <div className="text-red-500">{msg}</div>}
                </ErrorMessage>
              </div>

              <label className="whitespace-nowrap"> Nimi </label>
              <div>
                <Field
                  placeholder="Nimi"
                  className="flex flex-col py-2 px-3 border border-gray-300 rounded-md"
                  type="name"
                  name="name"
                />
                <ErrorMessage name="name">
                  {(msg) => <div className="text-red-500">{msg}</div>}
                </ErrorMessage>
              </div>
              <label className=" col-span-2 text-center">Kirjoita viesti</label>
              <div className="col-start-1 col-end-3 text-start ">
                <Field
                  as="textarea"
                  className="w-full rounded-md "
                  name="message"
                  type="message"
                  placeholder="Your Message"
                  rows="4"
                ></Field>
                <ErrorMessage name="message">
                  {(msg) => <div className="text-red-500">{msg}</div>}
                </ErrorMessage>
              </div>

              <div className="col-start-2  text-white font-bold ">
                <div className="w-full flex gap-4 ">
                  <button
                    className="bg-zinc-300  grow py-2 "
                    type="button"
                    onClick={closeModal}
                    disabled={isSubmitting}
                  >
                    peruuta
                  </button>
                  <button
                    className="bg-zinc-500 grow py-2 "
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Lähetä
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Modal
