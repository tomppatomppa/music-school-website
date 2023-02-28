import { useEffect, useState } from 'react'

import { useWindowScrollPosition } from './hooks/useWindowScrollPosition'
import useScroll from './hooks/useScroll'

import MainPrice from './components/MainPrice'
import MainContent from './components/MainContent'
import MainTeacher from './components/MainTeacher'
import Modal from './components/Modal'
import { Contact } from './components/Contact'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const { setDirection } = useScroll()

  const { scrollY } = useWindowScrollPosition()

  const handleOpenModal = () => {
    setModalOpen(true)
  }
  const handleCloseModal = () => {
    setModalOpen(false)
  }

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setMenuOpen(false)
    )
  }, [])

  return (
    <div className="App text-center grid grid-rows-[auto,1fr,auto] ">
      <Modal open={modalOpen} closeModal={handleCloseModal}>
        <Contact closeModal={handleCloseModal} />
      </Modal>
      <Navbar scrollY={scrollY} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero scrollY={scrollY} />
      {/* <Divider /> */}
      <MainContent />
      <MainTeacher />
      <MainPrice handleOpenModal={handleOpenModal} />
      <Footer />
      <button
        className={`${
          scrollY > 1980 ? 'visible' : 'invisible'
        } fixed flex justify-end text-black bottom-12  right-0 animate-bounce`}
        onClick={() => setDirection('top')}
      >
        Takaisin ylös
      </button>
    </div>
  )
}

export default App
