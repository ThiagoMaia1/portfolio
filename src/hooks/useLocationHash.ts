import { useState } from 'react'
import useHashChange from './useHashChange'

export default function useLocationHash() {
  const [hash, setHash] = useState(window.location.hash)
  useHashChange(setHash)
  return hash
}
