import technologies, { TechnologiesKey } from '../models/Technology/Technologies'
import { useState } from 'react';
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
    useHashChange(hash => setHashTechnologies(getTechnologies(hash)));
    return hashTechnologies;
}