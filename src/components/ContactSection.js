import React from 'react'
import Title from './common/Title'
import { Contact } from './Contact'

export const ContactSection = () => {
  return (
    <section className="bg-base  p-12  flex flex-col">
      <div className="">
        <Title title="OTA YHTEYTTÄ" description={'ETKÖ LÖYTÄNYT ETSIMÄÄSI?'}>
          Jäikö kysyttävää? Voit lähettää viestin alla olevalla lomakkeella, tai
          olla yhteydessä sähköpostitse tai puhelimitse.
        </Title>
      </div>
      <section className="flex mt-12 text-left md:flex-row flex-col items-center">
        <div className="flex-1">
          <p>+358 00 0000000</p>
          <p>+358 00 0000000</p>
          <p>INFO@PLEKTRA.FI</p>
          <p>MA-PE 09:00 - 16:00</p>
        </div>
        <div className="flex-1">
          <Contact />
        </div>
      </section>
    </section>
  )
}
