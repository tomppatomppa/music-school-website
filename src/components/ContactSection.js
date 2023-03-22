import React from 'react'
import Title from './common/Title'
import { Contact } from './Contact'
import { FaPhone, FaEnvelopeOpen } from 'react-icons/fa'
export const ContactSection = () => {
  return (
    <section className="bg-orange p-5 md:p-24 ">
      <Title title="OTA YHTEYTTÄ" description={'ETKÖ LÖYTÄNYT ETSIMÄÄSI?'}>
        Jäikö kysyttävää? Voit lähettää viestin alla olevalla lomakkeella, tai
        olla yhteydessä sähköpostitse tai puhelimitse.
      </Title>
      <section className="flex mt-12 text-left md:flex-row flex-col items-start">
        <div className="font-bold tracking-widest flex-1">
          <p>
            <FaPhone size={24} className="inline-block m-2" />
            <span>+358 00 0000000</span>
          </p>
          <p>
            <FaEnvelopeOpen size={24} className="inline-block m-2 " />
            INFO@PLEKTRA.FI
          </p>
          <p className="my-12">MA-PE 09:00 - 16:00</p>
        </div>
        <div className="flex-1 mx-auto ">
          <Contact />
        </div>
      </section>
    </section>
  )
}
