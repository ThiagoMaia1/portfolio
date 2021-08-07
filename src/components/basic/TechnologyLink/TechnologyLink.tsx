import { getKeyByValue, updateHash } from "../../../constants/FuncoesGeraisTS";
import technologies from "../../../models/Technology/Technologies";
import Technology from "../../../models/Technology/Technology";
import TechnologyLogo from '../TechnologyLogo/TechnologyLogo';
import './TechnologyLink.scss';

function TechnologyLink({technology, includeName = true} 
    : {technology : Technology, includeName ?: boolean}) {

    return (
        <div key={technology.name} 
             onClick={() => updateHash(getKeyByValue(technologies, technology))} 
             className='technology-link'>
            <TechnologyLogo technology={technology}/>
            {includeName &&
             <span>{technology.name}</span>
            }
        </div>
    )
}

export default TechnologyLink;
