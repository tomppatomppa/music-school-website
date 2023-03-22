import React from 'react'
import Title from './common/Title'

const About = () => {
  return (
    <div className=" flex flex-col md:flex-row items-center justify-center py-12 ">
      <div className="mr-4 flex-1">
        <img
          className="object-contain"
          alt="kitara, puita ja vesiputous, nuotteja viivastolla, lintuja"
          src="https://www.bandikoulu.fi/wp-content/uploads/guitar-trees-waterfall-6104847.jpg"
        />
      </div>
      <div className="h-full flex-1 my-12 ">
        <div className=" md:max-w-md px-2 mx-auto text-left flex flex-col  text-secondary">
          <Title title={'MEISTÄ'} description="TAVOITTEENA SOITTAMISEN ILO" />
          <div className="flex flex-col gap-y-4">
            <p>
              Haluatko soittaa tai laulaa bändissä? Tai kenties haluat tehdä
              biisejä? Jos vastasit kyllä, niin Soitonopetus Plektra on sun
              paikka!
            </p>
            <p>
              Bänditoiminnan lisäksi tarjoamme laadukasta yksityisopetusta eri
              bändi-instrumenteissa. Järjestämme opetusta myös aikuisille.
            </p>
            <p>
              Tarkoituksena on löyttää soittamisen ilo, kehittää ryhmässä
              toimimisen taitoja sekä luoda ja kokea kulttuuria. Lukukaudet
              huipentaa kaikille oppilaille yhteinen loppukonsertti.
            </p>
          </div>
          <button className="self-start block mt-12 bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-8 border border-primary hover:border-transparent rounded-full">
            ilmoittaudu
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
