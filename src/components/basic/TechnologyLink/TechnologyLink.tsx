import { gotoLink } from "../../../constants/FuncoesGeraisTS";
import Technology from "../../../models/Technology/Technology";
import './TechnologyLink.scss';

function TechnologyLink({technology} : {technology : Technology}) {

    return (
        <div key={technology.name} 
             onClick={() => gotoLink(technology.webPageUrl)} 
             className='technology-link'>
            <div className='technology-logo-container'>
                <img src={require(`../../images/${technology.logoUri}`).default} alt={`Logo ${technology.name}`}/>
            </div>
            <span>{technology.name}</span>
        </div>
    )
}

export default TechnologyLink;
