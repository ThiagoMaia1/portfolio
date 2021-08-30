import { useCallback, useEffect, useState } from 'react';
import technologies from '../models/Technology/Technologies';
import useFilter from './useFilter'
import useHashChange from './useHashChange'
import { getTechnologies } from './useHashTechnologies'

const useSkillFilter = () => {

    let [termo, ref] = useFilter();

    const filterHashs = useCallback(hash => {
        let technologiesHash = getTechnologies(hash);
        if (technologiesHash.length === 1)
            ref.current.value = technologies[technologiesHash[0]].name;
    }, []);
    useHashChange(filterHashs);

    return [termo, ref];

}

export default useSkillFilter;