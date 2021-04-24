import { useState } from 'react'
import useHashChange from './useHashChange'

export default function useLocationHash () {
    let [hash, setHash] = useState(window.location.hash);
    useHashChange(setHash);
    return hash;
}