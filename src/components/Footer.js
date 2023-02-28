import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-zinc-100 col-span-full p-4 ">
      <p className="mb-3">Sosialinen media</p>
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
