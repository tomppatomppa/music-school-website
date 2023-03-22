import React from 'react'
import { ErrorMessage, Field, Form } from 'formik'

const ContactForm = ({ isSubmitting }) => {
  return (
    <Form
      className={`grid text-left grid-cols-[auto,1fr] items-center  gap-y-3 gap-x-10 max-w-lg my-8 mx-auto p-5 rounded-md `}
    >
      <label className="whitespace-nowrap flex-1 ">Sähköposti </label>
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
      <label className="col-span-2 text-center">Kirjoita viesti</label>
      <div className="col-start-1 col-end-3 text-start ">
        <Field
          as="textarea"
          className="w-full rounded-md p-2"
          name="message"
          type="message"
          placeholder="Your Message"
          rows="4"
        />
        <ErrorMessage name="message">
          {(msg) => <div className="text-red-500">{msg}</div>}
        </ErrorMessage>
      </div>
      <div className="col-start-1 col-span-2   text-white font-bold ">
        <div className="w-full flex gap-4 ">
          <button
            className="bg-primary grow py-2 "
            type="submit"
            disabled={isSubmitting}
          >
            Lähetä
          </button>
        </div>
      </div>
    </Form>
  )
}

export default ContactForm
