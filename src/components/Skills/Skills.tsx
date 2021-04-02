import getTranslatedSentence from "../../translation/Translation";
import SectionTitle from "../basic/SectionTitle/SectionTitle";
import technologies from '../../models/Technology/Technologies';
import TechnologyLink from "../basic/TechnologyLink/TechnologyLink";
import './Skills.scss';
import { useState } from "react";
import useWindowResize from "../../hooks/useWindowResize";

const t = technologies;

const skills = [
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

function Skills() {

    const columnWidth = 350;
    
    const getNumberOfColumns = (width : number) => Math.floor(width/columnWidth);

    let [numberOfColumns, setNumberOfColumns] = useState(getNumberOfColumns(window.innerWidth));
    useWindowResize(size => setNumberOfColumns(getNumberOfColumns(size.width)));

    return (
        <div>
            <SectionTitle text={getTranslatedSentence('skills')} />
            <div className='skill-list-container'>
                {getGroupedSkills(numberOfColumns).map(g =>
                    <div key={g[0].name}>
                        {g.map(s => 
                            <TechnologyLink key={s.name} technology={s}/>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Skills;
function getGroupedSkills(numberOfGroups : number) {
    console.log(numberOfGroups);
    const step = skills.length/numberOfGroups;
    const groups = [];
    //Reversions necessary to get the first column to be the longest.
    const skillsReversed = [...skills]; 
    skillsReversed.reverse();
    for (let i = 0; i < skills.length; i += step)
        groups.push(skillsReversed.slice(i, i + step).reverse());
    return groups.reverse();
}

