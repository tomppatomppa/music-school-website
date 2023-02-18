import { useEffect, useRef, useState } from 'react'

import MainPrice from './components/MainPrice'
import MainContent from './components/MainContent'
import MainTeacher from './components/MainTeacher'
import Modal from './components/Modal'
import { useWindowScrollPosition } from './hooks/useWindowScrollPosition'

const HamburgerButton = ({ onClick, menuOpen }) => {
  return (
    <button
      onClick={onClick}
      className={`absolute ${
        menuOpen ? 'rotate-90' : 'rotate-0'
      } md:hidden right-2`}
    >
      <svg viewBox="0 0 100 80" width="20" height="20">
        <rect width="100" height="20"></rect>
        <rect y="30" width="100" height="20"></rect>
        <rect y="60" width="100" height="20"></rect>
      </svg>
    </button>
  )
}
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const { scrollY } = useWindowScrollPosition()

  const priceRef = useRef(null)

  function handleBackClick() {
    priceRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

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

  const id = '1ygaXp5llsmFGNm0aQiqEsBO_UGg_cwOR'

  return (
    <div className="App   text-center grid grid-rows-[auto,1fr,auto] ">
      <Modal open={modalOpen} closeModal={handleCloseModal} />
      <header className="bg-zinc-200 w-full items-center col-span-full flex flex-col md:flex-row  p-4">
        <div className="flex grow">LOGO</div>

        <div
          className={`${
            menuOpen ? 'visible' : 'absolute  md:relative invisible md:visible'
          } md:visible gap-6 flex flex-col md:flex-row  mt-4 md:mt-0`}
        >
          <button>Opetus</button>
          <button>Tietoa</button>
          <button onClick={handleBackClick}>Hinnasto</button>
        </div>
        <HamburgerButton
          menuOpen={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </header>
      <section className="section bg-gradient-to-r  from-blue-200 via-fuchsia-50 to-white h-[90vh] justify-center ">
        <div className=" flex  flex-col lg:flex-row h-full justify-center rounded-md ">
          <div className="bg-blue-100 text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-gray-600 gap-2 flex justify-center basis-1/2 flex-col ">
            <h1 className="uppercase text-5xl sm:text-6xl ">Kitarakoulu</h1>
            <p
              className={`bg-black ${
                scrollY > 0 ? 'w-36' : 'w-52'
              } self-center h-1 transition-all duration-500`}
            ></p>
            <h3 className=" text-gray-600 text-2xl uppercase tracking-widest">
              Plektra
            </h3>
            <p className="my-2 text-gray-500 tracking-tight">
              Laadukasta Kitaraopetusta kaiken ikäisille.
            </p>
          </div>
          <div className="  basis-1/2 flex items-center ">
            <img
              alt="Guitar Student"
              className="object-cover w-full h-full  "
              src={`https://drive.google.com/uc?id=${id}`}
            ></img>
          </div>
        </div>
      </section>
      <MainContent />
      <MainTeacher />
      <MainPrice handleOpenModal={handleOpenModal} />
      <div ref={priceRef} className="bg-blue-200 col-span-full">
        Footer
      </div>
      <button
        className={`${
          scrollY > 1980 ? 'visible' : 'invisible'
        } fixed flex justify-end text-black bottom-12  right-0 animate-bounce`}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }}
      >
        Takaisin ylös
      </button>
    </div>
  )
}

export default App
