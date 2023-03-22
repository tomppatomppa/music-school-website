import React from 'react'

import { googleBaseUrl, personFull } from '../utils.js/config'
const aboutPageData = {
  sectionContent: {
    title: 'title',
    subtitle: 'subtitle',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
}

const About = () => {
  const { title, subtitle, description } = aboutPageData.sectionContent

  return (
    <div className="wrapper bg-primary">
      <div className="flex justify-center h-72">
        <h2 className="self-center mt-12">ABOUT</h2>
      </div>
      <section className="flex  bg-gray-500 mx-auto ">
        <div className=" md:flex-row flex-col ">
          <div className="flex   md:flex-row flex-col bg-gray-200  text-center items-center">
            <div className="flex mt-12 flex-col flex-1 w-screen gap-8 ">
              <h1>{title}</h1>
              <h2 className="max-w-xl self-center tracking-wide">
                {description}
              </h2>
              <p className="max-w-xl self-center tracking-wide">{subtitle}</p>
              <p className="max-w-xl self-center font-light tracking-wide">
                {description}
              </p>
            </div>

            <div className="mx-auto basis-1/3">
              <img
                className="float-left object-cover"
                alt="1 person full body"
                src={`${googleBaseUrl}${personFull}`}
              />
            </div>
          </div>
          <div className="flex  md:flex-row-reverse flex-col bg-gray-200  text-center items-center">
            <div className="flex flex-col flex-1 w-screen gap-8 ">
              <p className="max-w-xl self-center tracking-wide">
                {description}
              </p>
              <p className="max-w-xl self-center tracking-wide">{subtitle}</p>
              <p className="max-w-xl self-center font-light tracking-wide">
                {description}
              </p>
            </div>
            <div className="mx-auto basis-1/3">
              <img
                className="float-right object-cover"
                alt="1 person full body"
                src={`${googleBaseUrl}${personFull}`}
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col bg-gray-200  text-center items-center">
            <div className="flex flex-col flex-1 w-screen gap-8 ">
              <p className="max-w-xl self-center tracking-wide">
                {description}
              </p>
              <p className="max-w-xl self-center tracking-wide">{subtitle}</p>
              <p className="max-w-xl self-center font-light tracking-wide">
                {description}
              </p>
            </div>
            <div className="mx-auto basis-1/3">
              <img
                className="float-right object-cover"
                alt="1 person full body"
                src={`${googleBaseUrl}${personFull}`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
