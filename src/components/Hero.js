import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="bg-hero relative h-full ">
      <div className="top-0 left-0 w-full h-full">
        <SVG1 screenWidth={screenWidth} />
        <div className="absolute flex-col -top-10 md:-top-20 left-0 w-full h-full flex justify-center items-center">
          <div className="text-white text-5xl font-bold uppercase lg:text-6xl">
            <span>Soiton</span>
            <span className="text-action">opetus</span>
            <p className="mt-6 text-7xl"> Plektra</p>
          </div>
          <p className="relative text-gray-400 mt-6  font-bold uppercase">
            Aloita kitaransoitto tänään
          </p>
        </div>
      </div>
    </section>
  )
}
//TODO: fix this
const SVG1 = ({ screenWidth }) => {
  const fullHeight = 540
  return (
    <svg
      id="visual"
      viewBox={`0 0 960 ${screenWidth < 800 ? 1240 : fullHeight}`}
      version="1.1"
    >
      {/* <rect x="0" y="0" width="100%" height="100%" fill="#001122"></rect> */}
      <defs>
        <linearGradient id="grad1_0" x1="43.8%" y1="0%" x2="100%" y2="100%">
          <stop
            offset="14.444444444444446%"
            stopColor="#001122"
            stopOpacity="1"
          ></stop>
          <stop
            offset="85.55555555555554%"
            stopColor="#001122"
            stopOpacity="1"
          ></stop>
        </linearGradient>
      </defs>
      <defs>
        <linearGradient id="grad2_0" x1="0%" y1="0%" x2="56.3%" y2="100%">
          <stop
            offset="14.444444444444446%"
            stopColor="#001122"
            stopOpacity="1"
          ></stop>
          <stop
            offset="85.55555555555554%"
            stopColor="#001122"
            stopOpacity="1"
          ></stop>
        </linearGradient>
      </defs>
      <g transform="translate(960, 0)">
        <path
          d="M0 324C-36.2 280.6 -72.4 237.2 -124.5 215.6C-176.6 194.1 -244.7 194.3 -280.6 162C-316.5 129.7 -320.2 64.8 -324 0L0 0Z"
          fill="#FCAF3C"
        ></path>
      </g>
      <g transform={`translate(0, ${screenWidth < 800 ? 1240 : fullHeight})`}>
        <path
          d="M0 -324C32.5 -274.1 64.9 -224.3 117.5 -203.5C170.1 -182.7 242.8 -191.1 280.6 -162C318.4 -132.9 321.2 -66.5 324 0L0 0Z"
          fill="#FCAF3C"
        ></path>
      </g>
    </svg>
  )
}

export default Hero
