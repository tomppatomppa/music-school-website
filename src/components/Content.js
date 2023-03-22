import React from 'react'

import Title from './common/Title'

const items = [
  {
    title: 'BÄNDITUNNIT',
    content:
      'Soitonopetus Plektra tarjoaa bändiopetusta kaikenikäisille, vasta-alkajille ja jo pidempään soittaneille. Olemme Suomen vanhin ja kokenein yhtyesoittamiseen keskittynyt musiikkikoulu, joka on tottunut jo pitkään tarjoamaan maamme parasta bändiopetusta. Annamme opetusta kaikissa yleisimmissä bändisoittimissa: kitarassa, bassossa, laulussa, kosketinsoittimissa/pianossa ja rummuissa. Muista soittimista kannattaa aina kysäistä meiltä!',
  },
  {
    title: 'YKSITYISTUNNIT',
    content:
      'Soitonopetus Plektra tarjoaa maamme parasta sähkökitaran, basson, pianon/kosketinsoitinten, pop/jazz-laulun sekä rumpujen yksityisopetusta. Muista soittimista kannattaa aina ensiksi kysäistä meiltä. Lisäksi valittavana on musiikkituotannon ja elektronisen musiikin yksityistunteja. Opetukseen voi tulla iästä tai lähtötasosta riippumatta.',
  },
  {
    title: 'AIKUISET',
    content:
      'Kiinnostaako musiikin harrastaminen aikuisiällä? Soitonopetus Plektran aikuisopetus on juuri sinulle, olet sitten aloittamassa musiikin harrastamista ensimmäistä kertaa tai palaamassa rakkaan vanhan harrastuksen pariin. Tarjolla on aikuisopetusta laajalti eri musiikkiaineissa.',
  },
]

const ContentItem = ({ item }) => {
  const { title, content } = item
  return (
    <div className="flex flex-col">
      <img className="w-full" src="https://picsum.photos/400/300" alt="" />
      <div className="flex h-full flex-col text-left ">
        <h2 className="mb-2">{title}</h2>
        <p>{content}</p>
        <a className="text-base" href="/about">
          Lue lisää
        </a>
      </div>
    </div>
  )
}
const Content = () => {
  return (
    <>
      <Title title={'OPETUS'} description="BÄNDIPAJASTA MUSATEKNOLOGIAAN" />
      <div className="mx-auto grid xl:grid-cols-3 grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]   gap-8">
        {items.map((item, index) => (
          <ContentItem key={index} item={item} />
        ))}
      </div>
    </>
  )
}

export default Content
