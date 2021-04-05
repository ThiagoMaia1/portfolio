import { useContext, useEffect, useState } from 'react';
import { ScrollContext } from '../Main/ScrollProvider';
import SectionsIndexWave from './components/SectionsIndexWave/SectionsIndexWave';
import './SectionsIndex.scss';

const sectionsIds = [
    'about-me',
    'skills-section',
    'project-section',
    'previous-experiences-section',
    'education-section',
];

export type Section = {id : string, element : HTMLElement, title : string, height : number};

function SectionsIndex() {

    const alignedOffsetOfHeight = 0.1;
    const sections = sectionsIds.reduce((sections, id) => {
        let element = document.querySelector(`#${id}`);
        if (element instanceof HTMLElement) {
            sections.push({
                id,
                element,
                title: document.querySelector(`#${id} .section-title > div`)?.innerHTML ?? id,
                height: 0,
            });
        }
        return sections;
    }, [] as Section[]);

    useContext(ScrollContext);
    let [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    let [isVisible, setIsVisible] = useState(window.innerWidth > window.innerHeight);
    useEffect(() => sections.forEach((s, i) => {
        s.height = i < sections.length - 1 
                   ? sections[i+1].element.offsetTop - s.element.offsetTop
                   : s.element.offsetHeight;
        setIsVisible(window.innerWidth > window.innerHeight);
    }, [window.innerHeight, window.innerWidth]));

    return (
        <div id='sections-index-container' style={!isVisible ? {opacity: 0, pointerEvents: 'none'} : {}}>
            <SectionsIndexWave sections={sections} 
                               setCurrentIndex={setCurrentSectionIndex} 
                               alignedOffsetOfHeight={alignedOffsetOfHeight}/>
            <div className='sections-index-items-container'>
                {
                    sections.map((s, i) => 
                        <SectionsIndexItem key={s.id} section={s} isSelected={i === currentSectionIndex} alignedOffsetOfHeight={alignedOffsetOfHeight}/>  
                    )
                }
            </div>
        </div>
    )
}

function SectionsIndexItem({section, isSelected, alignedOffsetOfHeight} 
    : {section : Section, isSelected : boolean, alignedOffsetOfHeight : number}) {
    
    const onClick = () =>
        document.body.scroll({
            top: section.element.offsetTop - alignedOffsetOfHeight*window.innerHeight, 
            left: 0, 
            behavior: 'smooth'
        });
    
    return (
        <div className='sections-index-item'  
             onClick={onClick}>
            <div className={isSelected ? ' selected' : ''}>
                {section.title}
            </div>
        </div> 
    )
}

export default SectionsIndex;
