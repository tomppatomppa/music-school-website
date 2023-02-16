import React from 'react'
import { googleBaseUrl } from '../utils.js/config'
const content = [
  {
    title: 'Pysy yhdessä',
    content:
      ' Yhdistä heti useampi laite Bluetooth-yhteydellä tai lataa laitteet nopeasti langattomalla tai 36 watin USB-C-latauksella.',
  },
  {
    title: 'Pysy yhdessä',
    content:
      ' Yhdistä heti useampi laite Bluetooth-yhteydellä tai lataa laitteet nopeasti langattomalla tai 36 watin USB-C-latauksella.',
  },
  {
    title: 'Pysy yhdessä',
    content:
      ' Yhdistä heti useampi laite Bluetooth-yhteydellä tai lataa laitteet nopeasti langattomalla tai 36 watin USB-C-latauksella.',
  },
  {
    title: 'Pysy yhdessä',
    content:
      ' Yhdistä heti useampi laite Bluetooth-yhteydellä tai lataa laitteet nopeasti langattomalla tai 36 watin USB-C-latauksella.',
  },
]
const id = '1gkKt2FW7VMGGxbgmRik_Z-X1mfFODP3g'
const HeroSection = ({ item }) => {
  return (
    <section className="max-w-6xl bg-zinc-200 even:bg-zinc-400  flex  md:flex-row md:even:flex-row-reverse flex-col-reverse w-screen justify-center items-center">
      <img
        className="flex basis-1/2 w-full"
        src={googleBaseUrl + id}
        alt=""
      ></img>

      <div className="flex basis-1/2 break-keep my-12 ">
        <div className="px-20  ">
          <strong className="text-lg">{item.title}</strong>
          <p>{item.content}</p>
        </div>
      </div>
    </section>
  )
}
const MainContent = () => {
  return (
    <section className="mx-auto">
      <div className="">
        {content.map((item, index) => (
          <HeroSection key={index} item={item} />
        ))}
      </div>
    </section>
  )
}

export default MainContent
