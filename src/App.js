import Navbar from './components/Navbar'

import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
