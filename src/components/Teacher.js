import React from 'react'
import { googleBaseUrl, portrait } from '../utils.js/config'
import Title from './common/Title'

const description_fi =
  '“Viisi vuotta sitten aloitin oman kitaranopetusliiketoimintani kokeellisena sivutyönä. Alussa se oli vain pieni yritys, mutta huomasin, että minulla oli paljon annettavaa opettamisen suhteen.”'

const Teacher = () => {
  return (
    <section className="my-24">
      <Title title="OPETTAJA" description="Pedagoogiset valmiudet" />
      <div className="flex mx-auto md:bg-none max-w-3xl p-4 flex-col md:flex-row-reverse items-center gap-2 bg-red-50 shadow-xl">
        <figure className="flex basis-1/2 relative">
          <img
            className="w-96 md:w-full"
            src={googleBaseUrl + portrait}
            alt="Portrait"
          />
          <div className="absolute inset-0 mt-80"></div>
        </figure>
        <article className="flex flex-col basis-1/2 self-center ">
          <blockquote className="text-xl font-light mt-2">
            {description_fi}
          </blockquote>
          <p className="mt-6 text-xl font-extralight text-center ">
            <strong>Tomi West</strong>
          </p>
        </article>
      </div>
    </section>
  )
}

export default Teacher
