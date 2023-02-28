import React from 'react'
import { artboard1, googleBaseUrl } from '../utils.js/config'

const content = [
  {
    title: 'Yhdessä soittaminen',
    content:
      'Yhdessä soittaminen tarjoaa monia etuja, kuten mahdollisuuden kehittää vuorovaikutustaitoja ja luoda vahvoja yhteyksiä muiden soittajien kanssa.',
    imageId: artboard1,
  },
  {
    title: 'Oppilaan tarpeet',
    content:
      'Oppilaskeskeinen pedagogiikka korostaa oppilaan aktiivista roolia oppimisessa ja opettajan roolia oppimisen ohjaajana.',
    imageId: artboard1,
  },
  {
    title: 'Kitaran soittaminen',
    content:
      'Kitaransoitto on monipuolinen musiikillinen taito, joka tarjoaa lukemattomia mahdollisuuksia ilmaisulle ja musiikin luomiselle. ',
    imageId: artboard1,
  },
  {
    title: 'Opettaja tukena',
    content:
      'Opettajan avulla oppiminen helpottuu, kun opettaja tarjoaa opiskelijoille henkilökohtaista huomiota, selkeää opastusta ja rakentavaa palautetta.',
    imageId: artboard1,
  },
]

const MainItems = ({ item }) => {
  return (
    <section className="max-w-7xl bg-fuchsia-50 even:bg-fuchsia-100  flex  lg:flex-row lg:even:flex-row-reverse flex-col-reverse w-screen justify-center items-center">
      <div className="relative group  self-stretch flex  md:w-full">
        <img
          className="self-stretch w-full object-cover"
          src={googleBaseUrl + item.imageId}
          alt=""
          loading="lazy"
        ></img>
      </div>

      <div className="flex w-full ">
        <div className="p-12 mx-auto ">
          <summary className="list-none  hover:underline font-semibold font text-lg tracking-widest">
            {item.title}
          </summary>
          <p className=" font-normal max-w-sm text-gray-600 tracking-wider text-center p-2">
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
          <MainItems key={index} item={item} />
        ))}
      </div>
    </section>
  )
}

export default MainContent
