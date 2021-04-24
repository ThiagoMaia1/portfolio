import { getKeyByValue } from '../constants/FuncoesGeraisTS';
import technologies from '../models/Technology/Technologies';
import Technology from '../models/Technology/Technology';
import useHashTechnologies from './useHashTechnologies';

export default function useFilterHashTechnologies () {
    let hashTechnologies = useHashTechnologies();
    return (technologyArray : Technology[]) =>
        !hashTechnologies.length ||
        technologyArray.filter(t => {
            let technologyKey = getKeyByValue(technologies, t);
            return hashTechnologies.includes(technologyKey)
        }).length
}