import { useEffect, useRef } from 'react'

type Size = { width: number; height: number }

export default function useWindowResize(
  callback: (size: Size) => void,
  delay = 0,
) {
  const timeout = useRef(setTimeout(() => void 0))
  useEffect(() => {
    const onResize = () => {
      clearTimeout(timeout.current)
      timeout.current = setTimeout(
        () =>
          callback({
            width: window.innerWidth,
            height: window.innerHeight,
          }),
        delay,
      )
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  })
}
