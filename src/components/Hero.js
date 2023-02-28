import React from 'react'
import { hero } from '../utils.js/config'

const Hero = ({ scrollY }) => {
  return (
    <section className="section bg-gradient-to-r from-blue-200 via-fuchsia-50 to-white h-[90vh] justify-center ">
      <article className=" flex flex-col lg:flex-row h-full justify-center rounded-md ">
        <header className="bg-blue-100 text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-gray-600 gap-2 flex justify-center basis-1/2 flex-col ">
          <h1 className="uppercase text-5xl sm:text-6xl">Kitarakoulu</h1>
          <p
            className={`bg-black ${
              scrollY > 0 ? 'w-36' : 'w-52'
            } self-center h-[2px] transition-all duration-500 font-sm `}
          ></p>
          <h3 className=" text-gray-600 text-2xl uppercase tracking-widest">
            Plektra
          </h3>
          <p className="my-2 text-gray-500 tracking-tight">
            Laadukasta Kitaraopetusta kaiken ikäisille.
          </p>
        </header>
        <figure className="basis-1/2 relative">
          <img
            alt="Guitar Student"
            className="object-cover w-full h-full  "
            src={`https://drive.google.com/uc?id=${hero}`}
          ></img>
          <div className="absolute inset-0 lg:bg-gradient-to-r from-fuchsia-50"></div>
        </figure>
      </article>
    </section>
  )
}

export default Hero
