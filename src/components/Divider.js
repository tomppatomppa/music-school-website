import React from 'react'
import { googleBaseUrl, guitarDivider } from '../utils.js/config'

const Divider = () => {
  return (
    <div className="flex w-full justify-center  mx-auto lg:my-12">
      <img
        alt="Guitar"
        src={`${googleBaseUrl + guitarDivider}`}
        className="h-48 md:h-60 opacity-50"
      ></img>
    </div>
  )
}

export default Divider
