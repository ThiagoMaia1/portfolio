import { useState } from "react";
import useFilterHashTechnologies from "../../../../hooks/useFilterHashTechnologies";
import useWindowResize from "../../../../hooks/useWindowResize";
import companies from "../../../../models/Company/Companies";
import professionalExperiences from "../../../../models/ProfessionalExperience/ProfessionalExperiences";
import AppearFromBelow from "../../../Animations/AppearFromBelow/AppearFromBelow";
import EmDash from "../../../basic/EmDash/EmDash";
import CompanyLogo from "../CompanyLogo/CompanyLogo";
import JobData from "../JobData/JobData";
import './CompanyExperience.scss';

function CompanyExperience({companyKey, isOdd, isLast, isEducation} 
    : {companyKey : keyof typeof companies, isOdd : boolean, isLast : boolean, isEducation : boolean}) {

    const experiences = professionalExperiences
                        .filter(e => e.companyKey === companyKey && e.isEducation === isEducation)
                        .sort((a, b) => b.initialDate.getTime() - a.initialDate.getTime());
                        
    let [isVertical, setIsVertical] = useState(window.innerHeight > window.innerWidth);
    useWindowResize(({width, height}) => setIsVertical(height > width));
    
    let filterTechnologies = useFilterHashTechnologies();
    let filteredExperiences = experiences.filter(e => e.isEducation || !!filterTechnologies(e.skillSet));

    const flexElements = [
        <CompanyLogo key={0} company={companies[companyKey]}/>,
        <div key={1} className='space-between'></div>,
        <div key={2}>
            {filteredExperiences
                .map((e, i, a) => 
                    <JobData key={companyKey + e.title} experience={e} isLast={i === a.length - 1}/>
            )}
        </div>,
    ];

    if (isOdd && !isVertical) flexElements.reverse();
    
    if (!filteredExperiences.length) return null;
    return (
        <AppearFromBelow>
            <div className='company-experience-container'>
                <div className='company-experience' style={{flexDirection: isVertical ? 'column' : 'row'}}>
                    {flexElements}
                </div>
                {isLast ? null : <EmDash/>} 
            </div>
        </AppearFromBelow>
    );
}

export default CompanyExperience;
