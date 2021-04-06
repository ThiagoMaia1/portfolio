import professionalExperiences from "../../models/ProfessionalExperience/ProfessionalExperiences"
import getTranslatedSentence from "../../translation/Translation"
import SectionTitle from "../basic/SectionTitle/SectionTitle"
import CompanyExperience from "../PreviousExperiences/components/CompanyExperience/CompanyExperience"

function EducationSection() {

    let educationExperiences = professionalExperiences.filter(e => e.isEducation);
    let nonEducationNumber = professionalExperiences.length - educationExperiences.length;
    return (
        <div id='education-section' className='page-section'>
            <SectionTitle text={getTranslatedSentence('academicFormation')}/>
            <CompanyExperience companyKey='ufvStudent' isOdd={nonEducationNumber % 2 === 1} isLast={true} isEducation={true}/>
        </div>
    )
}

export default EducationSection
