import useFilterHashTechnologies from '../../hooks/useFilterHashTechnologies';
import companies, { CompanyKey } from '../../models/Company/Companies';
import Company from '../../models/Company/Company';
import ProfessionalExperience from '../../models/ProfessionalExperience/ProfessionalExperience';
import professionalExperiences from '../../models/ProfessionalExperience/ProfessionalExperiences';
import $t, { sentences } from '../../translation/Translation';
import SectionTitle from '../basic/SectionTitle/SectionTitle';
import CompanyExperience from './components/CompanyExperience/CompanyExperience';
import './PreviousExperiences.scss';

export type CompanyWithExperiences = {
    company: Company,
    experiences: ProfessionalExperience[],
    key: keyof typeof companies
}

class Section {
    constructor (
        public translationName : keyof sentences,
        public list : CompanyWithExperiences[], 
        public id : string,
        public filter : (x : any) => ProfessionalExperience[]  
    ){}
}

function PreviousExperiences() {

    let filterTechnologies = useFilterHashTechnologies();
    const sections = [
        new Section('previousExperiences', [], 'previous-experiences-section', 
            (key : CompanyKey) => ProfessionalExperience.filterByTechnology(
                ProfessionalExperience.companyExperiences(professionalExperiences, key, false),
                filterTechnologies
            )
        ),
        new Section('academicFormation', [], 'education-section',
            (key : CompanyKey) => ProfessionalExperience.companyExperiences(professionalExperiences, key, true)
        )
    ];

    Object.keys(companies).forEach(k => {
        let key = k as CompanyKey;
        sections.forEach(s => {
            let experiences = s.filter(key);
            if (experiences.length)
                s.list.push({
                    company: companies[key],
                    experiences: experiences,
                    key
                });
        })
    })
    
    return (
        <>
            {sections
                .filter(s => s.list.length)
                .map(s =>
                    <div id={s.id} className='page-section' key={s.id}>
                        <div style={{zIndex: 100, position: 'relative'}}>
                            <SectionTitle text={$t(s.translationName)}/>
                            {s.list.map((c, i, a) => 
                                <CompanyExperience key={c.key} 
                                                   companyWithExperiences={c} 
                                                   isOdd={i % 2 === 1} 
                                                   isLast={i === a.length - 1} 
                                /> 
                            )}
                        </div>
                    </div>  
            )}
        </>
    );
}

export default PreviousExperiences;

