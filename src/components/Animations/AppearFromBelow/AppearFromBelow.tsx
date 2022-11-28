import { ReactNode } from 'react'
import useAppearFromBelow from '../../../hooks/useAppearFromBelow'

type Props = {
  children: ReactNode
  styleProp?: Record<string, unknown>
}

function AppearFromBelow({ children, styleProp = {} }: Props) {
  const { style, ref } = useAppearFromBelow()

  return (
    <div
      ref={ref}
      style={{ position: 'static', ...style, ...styleProp }}
      className="appear-from-below"
    >
      <>{children}</>
    </div>
  )
}

export default AppearFromBelow
