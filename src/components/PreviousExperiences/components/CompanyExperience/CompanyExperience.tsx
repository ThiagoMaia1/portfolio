import { useState } from "react";
import useWindowResize from "../../../../hooks/useWindowResize";
import companies from "../../../../models/Company/Companies";
import professionalExperiences from "../../../../models/ProfessionalExperience/ProfessionalExperiences";
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
    
    const flexElements = [
        <CompanyLogo key={0} company={companies[companyKey]}/>,
        <div key={1} className='space-between'></div>,
        <div key={2}>
            {experiences.map((e, i, a) => 
                <JobData key={companyKey + e.title} experience={e} isLast={i === a.length - 1}/>
            )}
        </div>,
    ];

    if (isOdd && !isVertical) flexElements.reverse();
    
    if (!experiences.length) return null;
    return (
        <div className='company-experience-container'>
            <div className='company-experience' style={{flexDirection: isVertical ? 'column' : 'row'}}>
                {flexElements}
            </div>
            {isLast ? null : <EmDash/>} 
        </div>
    );
}

export default CompanyExperience;
