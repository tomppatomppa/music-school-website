import React from 'react'

const Footer = () => {
  return (
    <footer className="  col-span-full p-4 flex-shrink-0">
      <p className="mb-3 mx-auto text-center">Sosialinen media</p>
      <div className="flex justify-center mx-auto gap-6 text-gray-700 ">
        <button className="hover:text-black transition-all duration-300">
          Instagram
        </button>
        <button className="hover:text-black transition-all duration-300">
          Facebook
        </button>
        <button className="hover:text-black transition-all duration-300">
          LinkedIn
        </button>
      </div>
    </footer>
  )
}

export default Footer
