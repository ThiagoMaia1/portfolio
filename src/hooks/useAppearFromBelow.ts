import { useContext, useRef } from 'react'
import useClosingAnimation from './useClosingAnimation'
import { ScrollContext } from '../components/Main/ScrollProvider'

export default function useAppearFromBelow() {
  useContext(ScrollContext)
  const ref = useRef<HTMLDivElement>(null)
  const style = useClosingAnimation(
    ref.current &&
      ref.current.getBoundingClientRect().top < window.innerHeight * 0.9,
    () => void 0,
    { transform: 'translateY(50px)', opacity: 0 },
    { transform: '', opacity: 1 },
    500,
  )

  return { style, ref }
}
