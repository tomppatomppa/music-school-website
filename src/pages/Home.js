import React from 'react'
import useScroll from '../hooks/useScroll'
import { useWindowScrollPosition } from '../hooks/useWindowScrollPosition'

import Content from '../components/Content'
import About from '../components/About'
import { FaGuitar } from 'react-icons/fa'
import Teacher from '../components/Teacher'
import Products from '../components/Products'
import { ContactSection } from '../components/ContactSection'

import { Divider, LayeredWave } from '../components/common'
import Hero from '../components/Hero'

const Home = () => {
  const { setDirection } = useScroll()
  const { scrollY } = useWindowScrollPosition()

  return (
    <div className="App bg-zinc-100 z-10  ">
      <Hero />
      <LayeredWave />
      <section className="p-5 max-w-7xl mx-auto text-left">
        <Content />
        <Divider />
        <About />
        <Products />
        <Teacher />
      </section>
      <LayeredWave />
      <ContactSection />
      <button
        className={`${
          scrollY > 1980 ? 'visible' : 'invisible'
        } fixed flex justify-end  text-black bottom-12 flex-col right-12 animate-bounce`}
        onClick={() => setDirection('top')}
      >
        <FaGuitar size={34} />
        Ylös
      </button>
    </div>
  )
}

export default Home
