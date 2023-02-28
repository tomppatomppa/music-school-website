import { useEffect, useState } from 'react'

const useScroll = (action, ref = null) => {
  const [direction, setDirection] = useState(action)

  useEffect(() => {
    if (direction === 'bottom') {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      })
    }
    if (direction === 'top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
    return () => setDirection(null)
  }, [direction])

  return { setDirection }
}

export default useScroll
