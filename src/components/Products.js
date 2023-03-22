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
const ProductItem = ({ item }) => {
  const { title, details, price, type, imageUrl } = item
  return (
    <div className="bg-red-100 hover:shadow-xl border border-red-100 p-3 flex flex-col text-center">
      <img className="w-full" src="https://picsum.photos/400/300" alt="" />
      <div className="text-center font-medium text-primary  h-full flex-col mb-6 ">
        <div className="mt-2">
          {title} <span className="block">{details}</span>
        </div>
        <p className="text-xl font-bold">{price}€</p>
        <p className="text-sm font-normal text-red-800">{type}</p>
      </div>
    </div>
  )
}
const Products = () => {
  return (
    <section className="flex flex-col">
      <div className="mb-12">
        <Title title="HINNASTO" />
        <h4>
          Bändikoulun verkkokauppa on avattu. Voit ostaa yksittäisiä tunteja tai
          kolmen ja viiden kerran paketteja. Yksi kerta sisältää 30min
          soitonopetusta.
        </h4>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <ProductItem key={index} item={item} />
        ))}
      </div>
    </section>
  )
}

export default Products
