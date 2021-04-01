import { gotoLink } from "../../../constants/FuncoesGeraisTS";
import Technology from "../../../models/Technology/Technology";
import TechnologyLogo from '../TechnologyLogo/TechnologyLogo';
import './TechnologyLink.scss';

function TechnologyLink({technology} : {technology : Technology}) {

    return (
        <div key={technology.name} 
             onClick={() => gotoLink(technology.webPageUrl)} 
             className='technology-link'>
            <TechnologyLogo technology={technology}/>
            <span>{technology.name}</span>
        </div>
    )
}

export default TechnologyLink;
