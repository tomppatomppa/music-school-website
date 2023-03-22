import React from 'react'
import Title from './common/Title'

const About = () => {
  return (
    <div className="grow flex flex-col md:flex-row items-center justify-center py-12 ">
      <div className="mr-4  flex-1">
        <img
          alt="kitara, puita ja vesiputous, nuotteja viivastolla, lintuja"
          src="https://www.bandikoulu.fi/wp-content/uploads/guitar-trees-waterfall-6104847.jpg"
        />
      </div>
      <div className="h-full flex-1 my-12 ">
        <div className="md:max-w-md mx-auto text-left flex flex-col gap-y-4">
          <Title title={'MEISTÄ'} description="TAVOITTEENA SOITTAMISEN ILO" />
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

          <button className="self-start mt-12 block">ilmoittaudu</button>
        </div>
      </div>
    </div>
  )
}

export default About
