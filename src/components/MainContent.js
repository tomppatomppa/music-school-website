import React from 'react'
import { artboard1, googleBaseUrl } from '../utils.js/config'
const content = [
  {
    title: 'Yhdessä soittaminen',
    content:
      'Yhdessä soittaminen tarjoaa monia etuja, kuten mahdollisuuden kehittää vuorovaikutustaitoja ja luoda vahvoja yhteyksiä muiden soittajien kanssa.',
    img_id: artboard1,
  },
  {
    title: 'Oppilaan tarpeet',
    content:
      'Oppilaskeskeinen pedagogiikka korostaa oppilaan aktiivista roolia oppimisessa ja opettajan roolia oppimisen ohjaajana.',
    img_id: artboard1,
  },
  {
    title: 'Kitaran soittaminen',
    content:
      'Kitaransoitto on monipuolinen musiikillinen taito, joka tarjoaa lukemattomia mahdollisuuksia ilmaisulle ja musiikin luomiselle. ',
    img_id: artboard1,
  },
  {
    title: 'Opettaja tukena',
    content:
      'Opettajan avulla oppiminen helpottuu, kun opettaja tarjoaa opiskelijoille henkilökohtaista huomiota, selkeää opastusta ja rakentavaa palautetta.',
    img_id: artboard1,
  },
]

const HeroSection = ({ item }) => {
  return (
    <section className="max-w-7xl bg-zinc-200 even:bg-zinc-400  flex  md:flex-row md:even:flex-row-reverse flex-col-reverse w-screen justify-center items-center">
      <div className="relative group  self-stretch flex  md:w-full">
        <img
          className="self-stretch w-full object-cover"
          src={googleBaseUrl + item.img_id}
          alt=""
          loading="lazy"
        ></img>
        {/* <div className=" md:group-hover:visible visible md:invisible justify-end md:justify-center items-center flex flex-col absolute bottom-0 left-0 right-0 px-4 py-2 h-full  bg-gray-800 opacity-20 md:opacity-70">
          <button className="text-xl text-white font-bold">Lue lisää</button>
          <p className="mt-2  text-sm text-gray-300">
            Some description text. Some dummy text here. Welcome to
            KindaCode.com
          </p>
        </div> */}
      </div>

      <div className="flex w-full ">
        <div className="p-12 mx-auto ">
          <summary className="list-none  hover:underline font-semibold font text-lg tracking-widest">
            {item.title}
          </summary>
          <p className=" font-normal  max-w-sm text-gray-600 tracking-wider text-center p-2">
            {item.content}
          </p>
        </div>
      </div>
    </section>
  )
}
const MainContent = () => {
  return (
    <section className="mx-auto -z-50">
      <div>
        {content.map((item, index) => (
          <HeroSection key={index} item={item} />
        ))}
      </div>
    </section>
  )
}

export default MainContent
