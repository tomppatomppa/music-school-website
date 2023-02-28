import React from 'react'
import useScroll from '../hooks/useScroll'

import { HamburgerButton } from './HamburgerButton'

const Navbar = ({ menuOpen, setMenuOpen, scrollY }) => {
  const { setDirection } = useScroll()

  return (
    <nav
      className={`${
        scrollY > 400 ? '-translate-y-64 ' : ''
      } z-50 transition-all duration-500 border-b-[1px] border-slate-500 bg-slate-400 bg-opacity-20    fixed backdrop-blur-md w-full items-center col-span-full flex flex-col md:flex-row  p-4`}
    >
      <figure className="flex grow ">LOGO</figure>
      <div
        className={`${
          menuOpen ? 'visible' : 'absolute md:relative invisible md:visible'
        } md:visible transition-all duration-200 text-gray-600 lg:text-white gap-6 flex flex-col md:flex-row  mt-4 md:mt-0 text-lg font-light`}
      >
        <button
          className="hover:text-black "
          onClick={() => setDirection('bottom')}
        >
          Hinnasto
        </button>
      </div>
      <HamburgerButton
        menuOpen={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      />
    </nav>
  )
}

export default Navbar
