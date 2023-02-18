import React from 'react'
import { googleBaseUrl, portrait } from '../utils.js/config'
const description_fi =
  '“Viisi vuotta sitten aloitin oman kitaranopetusliiketoimintani kokeellisena sivutyönä. Alussa se oli vain pieni yritys, mutta huomasin, että minulla oli paljon annettavaa opettamisen suhteen.”'
const desc_en =
  ' “Five years ago, I started my own guitar teaching business as an  experimental side gig. In the beginning, it was just a small venture, but I realised I had alot to give when it came toteaching.”'
//  I decided to pursue for a degree in pedagogy and graduated in
// 2023. This move allowed me to explore other aspects of teaching,
// develop new hobbies, and prioritize my personal life. Today I am
// grateful for the opportunity to pursue my passion and share my
// skills with others.”
const MainTeacher = () => {
  return (
    <section className="bg-zinc-200 w-full md:h-[90vh] flex md:items-center  ">
      <div className="container ">
        <div className="flex flex-col md:flex-row-reverse items-center gap-2 ">
          <figure className="flex basis-1/2 ">
            <img
              className="w-96 md:w-full"
              src={googleBaseUrl + portrait}
              alt="Portrait"
            />
          </figure>
          <article className="flex flex-col basis-1/2 self-end ">
            <blockquote className="text-2xl mt-2">{description_fi}</blockquote>
            <p className="mt-6 text-xl text-center">
              <strong>Tomi West</strong>
            </p>
            {/* <div>
              <div className="mt-6  sm:mt-8 sm:flex sm:justify-center">
                <div className="relative bg-zinc-400  overflow-hidden py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="">
                    If you'd like to know more about me.{' '}
                    <a href="/" className="font-semibold ">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </span>
                </div>
              </div>
            </div> */}
          </article>
        </div>
      </div>
    </section>
  )
}

export default MainTeacher
