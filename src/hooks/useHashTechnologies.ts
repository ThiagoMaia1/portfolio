import technologies, { TechnologiesKey } from '../models/Technology/Technologies'
import { useCallback, useState } from 'react';
import useHashChange from './useHashChange';

export const hashSeparator = '&';

export const getTechnologies = (hash : string) => { 
    let list = hash.split(hashSeparator);
    return list.filter(l =>
        l in technologies
    ) as Array<TechnologiesKey>;
}

export default function useHashTechnologies() {
    let [hashTechnologies, setHashTechnologies] = 
        useState(getTechnologies(''));
    const setHash = useCallback(hash => 
        setHashTechnologies(getTechnologies(hash))
    , [setHashTechnologies]);
    useHashChange(setHash);
    return hashTechnologies;
}