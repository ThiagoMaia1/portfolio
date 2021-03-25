import getTranslatedSentence from "../translation/Translation";
import SectionTitle from "./SectionTitle";
import technologies from '../models/Technology/Technologies';
import TechnologyLink from "./TechnologyLink";
import '../styles/Skills.scss';

const t = technologies;

const skills = [
    t.Typescript, 
    t.Javascript, 
    t.PostgreSQL, 
    t.Python, 
    t.ReactJs, 
    t.ReactNative, 
    t.Flutter, 
    t.Firebase,
    t.Dart,
    t.GitHub,
    t.HTML5,
    t.CSS3,
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
