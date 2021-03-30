import getTranslatedSentence from "../../translation/Translation";
import SectionTitle from "../basic/SectionTitle/SectionTitle";
import technologies from '../../models/Technology/Technologies';
import TechnologyLink from "../basic/TechnologyLink/TechnologyLink";
import './Skills.scss';

const t = technologies;

const skills = [
    t.HTML5,
    t.CSS3,
    t.Javascript, 
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
