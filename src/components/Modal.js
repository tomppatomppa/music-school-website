import React, { useRef } from 'react'

import { useOutsideClick } from '../hooks/useOutsideClick'
import { useEscapeKey } from '../hooks/useEscapeKey'

const Modal = ({ open, closeModal, children }) => {
  const ref = useRef(null)

  useOutsideClick(closeModal, ref)
  useEscapeKey(closeModal)

  return (
    <div
      className={`${
        open ? 'visible' : 'hidden'
      } fixed   z-50  h-full w-full backdrop:bg-black   backdrop-blur-sm text-black`}
    >
      <div className="flex justify-center ">{children}</div>
    </div>
  )
}

export default Modal
