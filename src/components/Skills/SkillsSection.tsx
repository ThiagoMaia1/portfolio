import useFilter from "../../hooks/useFilter";
import projects from "../../models/Project/Projects";
import technologies from '../../models/Technology/Technologies';
import getTranslatedSentence from "../../translation/Translation";
import AppearFromBelow from "../Animations/AppearFromBelow/AppearFromBelow";
import SectionTitle from "../basic/SectionTitle/SectionTitle";
import Skills from "./components/Skills";
import './SkillsSection.scss';

const t = technologies;

const mainSkills = [
    t.HTML5,
    t.CSS3,
    t.Javascript, 
    t.Typescript, 
    t.GitHub,
    t.Angular,
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

const usedTechnologies = projects.map(p => p.technologies).flat()
const uniqueTechnologies = [...new Set(usedTechnologies)];
const otherSkills = uniqueTechnologies.filter(t => !mainSkills.includes(t));
const allSkills = mainSkills.concat(otherSkills);

function SkillsSection() {

    let [termo, refFilter] = useFilter();
    let mainList = termo 
                   ? allSkills.filter(s => new RegExp(termo, 'gi').test(s.name))
                   : mainSkills;
    let otherList = termo
                    ? []
                    : otherSkills;

    return (
        <div id='skills-section'>
            <SectionTitle text={getTranslatedSentence('skills')} />
            <AppearFromBelow>
                <div className='filter-input-container'>
                    <input ref={refFilter} value={termo} autoComplete='false' placeholder='Buscar'></input>
                </div>
                <Skills mainSkills={mainList} otherSkills={otherList}/>
            </AppearFromBelow>
        </div>
    )
};

export default SkillsSection;