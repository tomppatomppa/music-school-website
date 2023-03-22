import React from 'react'
import Title from './common/Title'

const items = [
  {
    imageUrl: '',
    title: 'ETÄSOITTOTUNTI',
    details: '1X30MIN',
    price: '39.00',
    type: 'Etäopetus',
  },
  {
    imageUrl: '',
    title: 'ETÄSOITTOTUNNIT',
    details: '3X30MIN',
    price: '95.00',
    type: 'Etäopetus',
  },
  {
    imageUrl: '',
    title: 'ETÄSOITTOTUNTI',
    details: '1X30MIN',
    price: '39.00',
    type: 'Etäopetus',
  },
  {
    imageUrl: '',
    title: 'ETÄSOITTOTUNTI',
    details: '1X30MIN',
    price: '39.00',
    type: 'Etäopetus',
  },
]
const Item = ({ item }) => {
  const { title, details, price, type, imageUrl } = item
  return (
    <div className="bg-red-50 hover:shadow-xl border border-red-100 p-3 flex flex-col text-center">
      <img className="w-full" src="https://picsum.photos/400/300" alt="" />
      <div className="flex text-center h-full flex-col mb-6 gap-1">
        <div className="text-app">
          {title} <span className="block">{details}</span>
        </div>
        <p className="text-xl font-bold">{price}€</p>
        <p className="text-sm text-red-800">{type}</p>
      </div>
    </div>
  )
}
const Products = () => {
  return (
    <section>
      <div className="mb-12">
        <Title title="VERKKOKAUPPA" />
        <h4>
          Bändikoulun verkkokauppa on avattu. Voit ostaa yksittäisiä tunteja tai
          kolmen ja viiden kerran paketteja. Yksi kerta sisältää 30min
          soitonopetusta.
        </h4>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
    </section>
  )
}

export default Products
