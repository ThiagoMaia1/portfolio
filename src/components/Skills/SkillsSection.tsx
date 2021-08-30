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
    t.Typescript, 
    t.NodeJs,
    t.GitLab,
    t.Scrum, 
    t.ReactJs, 
    t.ReactNative,
    t.NextJs,
    t.Jest,
    t.Firebase,
    t.PostgreSQL,
    t.SQL, 
    t.ForeignLanguage,
];

const unlistedSkills = [
    t.AWS,
    t.AdobePhotoshop, 
    t.AdobePremiere,
    t.AdobeIllustrator,
    t.AdobeIndesign,
    t.AdobeLightroom,
    t.MySQL,
];

const usedTechnologies = [
    ...projects.map(p => p.technologies),
    ...unlistedSkills,
    ...professionalExperiences.map(e => e.skillSet),
].flat();
const uniqueTechnologies = [...new Set(usedTechnologies)];
const otherSkills = uniqueTechnologies.filter(t => !mainSkills.includes(t));
const allSkills = mainSkills.concat(otherSkills);

function SkillsSection() {

    let [searchTerm, setSearchTerm] = useState('');
    let searchBarRef = useRef<HTMLInputElement>(null);
    let sectionRef = useRef<HTMLInputElement>(null);
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
                            return terms.filter(t => 
                                new RegExp(t, 'gi').test(s.name)
                            ).length;
                        })
                   : mainSkills;

    
    let otherList = searchTerm ? [] : otherSkills;
    const hashCallback = useCallback((hash : string, isFirstTime : boolean) => {
        let technologiesHash = getTechnologies(hash);
        if (technologiesHash.length === 1) 
            setTermo(technologies[technologiesHash[0]].name)
        if ((technologiesHash.length > 0 || !isFirstTime) && sectionRef.current !== null) 
            document.body.scroll({
            top: sectionRef.current.offsetTop - 0.1*window.innerHeight + (document.querySelector('#about-me')?.parentElement?.offsetTop ?? 0)
    })}, [setTermo]);
    useHashChange(hashCallback);

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