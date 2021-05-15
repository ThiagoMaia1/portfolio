import TechnologyLink from "../../basic/TechnologyLink/TechnologyLink";
import { useEffect, useRef, useState } from "react";
import useWindowResize from "../../../hooks/useWindowResize";
import Technology from "../../../models/Technology/Technology";
import ExpandArrow from "../../basic/ExpandArrow/ExpandArrow";

function Skills({mainSkills, otherSkills} 
    : {mainSkills : Technology[], otherSkills : Technology[]}) {

    const columnWidth = 400;
    let [isExpanded, setIsExpanded] = useState(false);
    let [sectionHeight, setSectionHeight] = useState('');

    function getGroupedSkills(skills : Technology[], numberOfGroups : number) : Technology[][] {
        if (!skills.length) return Array(numberOfColumns).fill([]);
        const step = skills.length/numberOfGroups;
        const groups = [];
        //Reversions necessary to get the first column to be the longest.
        const skillsReversed = [...skills]; 
        skillsReversed.reverse();
        for (let i = 0; i < skills.length; i += step)
            groups.push(skillsReversed.slice(i, i + step).reverse());
        return groups.reverse();
    }
    
    const getNumberOfColumns = (width : number) => Math.floor(width/columnWidth);

    let [numberOfColumns, setNumberOfColumns] = useState(getNumberOfColumns(window.innerWidth));
    useWindowResize(size => setNumberOfColumns(getNumberOfColumns(size.width)));

    let groupedMainSkills = getGroupedSkills(mainSkills, numberOfColumns);
    let groupedOtherSkills = getGroupedSkills(isExpanded ? otherSkills : [], numberOfColumns);

    let groupedSkills = groupedMainSkills.map((g, i) => 
        g.concat(groupedOtherSkills[i])
    );

    let refContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setSectionHeight(String(refContainer.current?.offsetHeight));
    }, [isExpanded, refContainer, setSectionHeight, mainSkills]);
    
    return (
        <>
            <div className='skill-list-container' style={{height: sectionHeight + 'px'}}>
                <div ref={refContainer}>
                    {groupedSkills.map((g, i) =>
                        <div key={g[0]?.name ?? i} style={{width: 60/numberOfColumns + 'vw'}}>
                            {g.map((s, j) => 
                                <TechnologyLink key={s?.name ?? j} technology={s}/>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Skills;

