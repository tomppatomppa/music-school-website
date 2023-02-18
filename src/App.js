import { useEffect, useState } from 'react'

import MainPrice from './components/MainPrice'
import MainContent from './components/MainContent'
import MainTeacher from './components/MainTeacher'
import Modal from './components/Modal'
import { useWindowScrollPosition } from './hooks/useWindowScrollPosition'
import useScroll from './hooks/useScroll'

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

  const id = '1ygaXp5llsmFGNm0aQiqEsBO_UGg_cwOR'

  return (
    <div className="App   text-center grid grid-rows-[auto,1fr,auto] ">
      <Modal open={modalOpen} closeModal={handleCloseModal} />
      <nav
        className={`${
          scrollY > 400 ? '-translate-y-64 ' : ''
        } transition-all duration-200 border-b-[1px] bg-slate-400 bg-opacity-20 z-900 border-black  fixed backdrop-blur-sm w-full items-center col-span-full flex flex-col md:flex-row  p-4`}
      >
        <div className="flex grow ">LOGO</div>

        <div
          className={`${
            menuOpen ? 'visible' : 'absolute md:relative invisible md:visible'
          } md:visible transition-all duration-200 text-gray-600 gap-6 flex flex-col md:flex-row  mt-4 md:mt-0 text-lg`}
        >
          <button className="hover:text-black ">Opetus</button>
          <button className="hover:text-black ">Tietoa</button>
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
      <section className="section bg-gradient-to-r from-blue-200 via-fuchsia-50 to-white h-[90vh] justify-center ">
        <article className=" flex flex-col lg:flex-row h-full justify-center rounded-md ">
          <header className="bg-blue-100 text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-gray-600 gap-2 flex justify-center basis-1/2 flex-col ">
            <h1 className="uppercase text-5xl sm:text-6xl">Kitarakoulu</h1>
            <p
              className={`bg-black ${
                scrollY > 0 ? 'w-36' : 'w-52'
              } self-center h-[2px] transition-all duration-500 font-sm `}
            ></p>
            <h3 className=" text-gray-600 text-2xl uppercase tracking-widest">
              Plektra
            </h3>
            <p className="my-2 text-gray-500 tracking-tight">
              Laadukasta Kitaraopetusta kaiken ikäisille.
            </p>
          </header>
          <figure className="basis-1/2 flex items-center ">
            <img
              alt="Guitar Student"
              className="object-cover w-full h-full  "
              src={`https://drive.google.com/uc?id=${id}`}
            ></img>
          </figure>
        </article>
      </section>
      <MainContent />
      <MainTeacher />
      <MainPrice handleOpenModal={handleOpenModal} />
      <div className="bg-blue-200 col-span-full">Footer</div>
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
