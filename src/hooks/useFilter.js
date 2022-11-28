import { useCallback, useState, useEffect, useRef } from 'react'

const useFilter = (zerar, ref, timeout = 999999) => {
  const newRef = useRef()
  if (!ref) {
    ref = newRef
  }
  const [termo, setTermo] = useState('')
  const [, setTimer] = useState(0)
  const limparTermo = () => setTermo('')
  const onKeyUp = useCallback(
    (e) => {
      setTimer((t) => {
        let newTimer = new Date().getTime()
        if (
          newTimer - t > timeout ||
          e.which === 46 ||
          e.which === 13 ||
          e.which === 27
        ) {
          //enter, delete ou esc
          limparTermo()
        }
        return newTimer
      })
      if (/[a-zA-Z0-9\s']/.test(e.key) && e.key.length === 1) {
        setTermo((t) => t + e.key)
      } else if (e.which === 8) {
        //backspace
        setTermo((t) => t.substr(0, t.length - 1))
      }
    },
    [timeout],
  )

  useEffect(() => {
    ref.current.addEventListener('keyup', onKeyUp)
    return () => document.removeEventListener('keyup', onKeyUp)
  })

  useEffect(() => {
    setTimeout(limparTermo, 10)
  }, [zerar])

  return [termo, ref]
}

export default useFilter
