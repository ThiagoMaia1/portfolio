import React, { useCallback, useRef, useState } from "react";
import useHashChange from "../../hooks/useHashChange";
import { getTechnologies } from "../../hooks/useHashTechnologies";
import projects from "../../models/Project/Projects";
import technologies from '../../models/Technology/Technologies';
import $t from "../../translation/Translation";
import AppearFromBelow from "../Animations/AppearFromBelow/AppearFromBelow";
import SectionTitle from "../basic/SectionTitle/SectionTitle";
import Skills from "./components/Skills";
import SeeTechnologyFamily from "./components/SeeTechnologyFamily"
import './SkillsSection.scss';
import { updateHash } from "../../constants/FuncoesGeraisTS";
import professionalExperiences from "../../models/ProfessionalExperience/ProfessionalExperiences";

const t = technologies;
const termSeparator = '|';

const mainSkills = [
    t.HTML5,
    t.CSS3,
    t.Javascript, 
    t.Typescript, 
    t.NodeJs,
    t.GitHub,
    t.ReactJs, 
    t.ReactNative, 
    t.Angular,
    t.Vue,
    t.Flutter, 
    t.Dart,
    t.Python,
    t.Firebase,
    t.SQL, 
    t.APIRest,
    t.Scrum, 
    t.ForeignLanguage,
];

const unlistedSkills = [
    t.AdobePhotoshop, 
    t.AdobePremiere,
    t.AdobeIllustrator,
    t.PostgreSQL,
    t.MySQL,
];

const usedTechnologies = [
    ...projects.map(p => p.technologies),
    ...professionalExperiences.map(e => e.skillSet),
    unlistedSkills
].flat();
const uniqueTechnologies = [...new Set(usedTechnologies)];
const otherSkills = uniqueTechnologies.filter(t => !mainSkills.includes(t));
const allSkills = mainSkills.concat(otherSkills);

function SkillsSection() {

    let [searchTerm, setSearchTerm] = useState('');
    let searchBarRef = useRef<HTMLInputElement>(null);
    let setTermo = useCallback((searchTerm : string) => {
        setSearchTerm(searchTerm);
        window.dispatchEvent(new Event('resize'));
    }, [])

    let mainList = searchTerm 
                   ? allSkills
                        .filter(s => {
                            let terms = searchTerm
                                        .split(termSeparator)
                                        .filter(t => t !== '')
                                        .map(t => t.trim());
                            console.log(terms)
                            return terms.filter(t => 
                                new RegExp(t, 'gi').test(s.name)
                            ).length;
                        })
                   : mainSkills;

    
    let otherList = searchTerm ? [] : otherSkills;
    useHashChange(hash => {
        let technologiesHash = getTechnologies(hash);
        if (technologiesHash.length === 1) 
            setTermo(technologies[technologiesHash[0]].name)
    });

    return (
        <div id='skills-section' style={{marginBottom: '30vh'}}>
            <SectionTitle text={$t('skills')} />
            <AppearFromBelow>
                <Skills mainSkills={mainList} otherSkills={otherList}/>
                <SeeTechnologyFamily setSearchTerm={setSearchTerm}/>
            </AppearFromBelow>
        </div>
    )
};

export default SkillsSection;