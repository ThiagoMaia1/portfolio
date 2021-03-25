import getTranslatedSentence from "../translation/Translation";
import SectionTitle from "./SectionTitle";
import technologies from '../models/Technology/Technologies';
import TechnologyLink from "./TechnologyLink";
import '../styles/Skills.scss';

const t = technologies;

const skills = [
    t.Javascript, 
    t.HTML5,
    t.CSS3,
    t.Typescript, 
    t.GitHub,
    t.ReactJs, 
    t.ReactNative, 
    t.Firebase,
    t.Flutter, 
    t.Dart,
    t.Python, 
    t.PostgreSQL, 
    t.AdobePhotoshop, 
    t.AdobeIllustrator, 
    t.ForeignLanguage,
];

function Skills() {

    return (
        <div>
            <SectionTitle text={getTranslatedSentence('skills')} />
            <div className='skill-list-container'>
                {skills.map(s => 
                    <TechnologyLink technology={s}/>
                )}
            </div>
        </div>
    );
}

export default Skills;
