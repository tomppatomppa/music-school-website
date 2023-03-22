import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useScroll from '../hooks/useScroll'
import { useWindowScrollPosition } from '../hooks/useWindowScrollPosition'

import Guitar from '../assets/images/guitar.png'
import { HamburgerButton } from './common'

const Navbar = () => {
  const { setDirection } = useScroll()
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useWindowScrollPosition()

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setMenuOpen(false)
    )
  }, [])

  return (
    <nav
      className={`${
        scrollY > 400 || scrollY !== 0 ? '-translate-y-64 ' : ''
      } z-50 transition-all duration-500 border-b-[1px] border-slate-500 bg-slate-400 bg-opacity-20    fixed backdrop-blur-md w-full items-center col-span-full flex flex-col md:flex-row  p-4`}
    >
      <figure className="flex grow ">
        <img
          alt="Guitar Student"
          className="w-16 hover:rotate-45 hover:mr-6 translate-all duration-200"
          src={Guitar}
        />
        <span className=" uppercase font-bold text-white self-center">
          Plektra
        </span>
      </figure>
      <div
        className={`${
          menuOpen ? 'visible' : 'absolute md:relative invisible md:visible'
        } md:visible transition-all duration-200 text-gray-600 lg:text-white gap-6 flex flex-col md:flex-row  mt-4 md:mt-0 text-lg font-light`}
      >
        <Link to={'/'} className="hover:text-black ">
          Etusivu
        </Link>
        <Link to={'/about'} className="hover:text-black ">
          Tietoa
        </Link>
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
