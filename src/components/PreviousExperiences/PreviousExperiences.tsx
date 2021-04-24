import companies from '../../models/Company/Companies';
import getTranslatedSentence from '../../translation/Translation';
import BackgroundWaves from '../Animations/BackgroundWaves/BackgroundWaves';
import SectionTitle from '../basic/SectionTitle/SectionTitle';
import CompanyExperience from './components/CompanyExperience/CompanyExperience';
import './PreviousExperiences.scss';

function PreviousExperiences() {

    return (
        <div id='previous-experiences-section' className='page-section'>
            <BackgroundWaves/>
            <div style={{zIndex: 100, position: 'relative'}}>
                <SectionTitle text={getTranslatedSentence('previousExperiences')}/>
                {Object.keys(companies).map((c, i, a) => 
                    <CompanyExperience key={c} companyKey={c as keyof typeof companies} isOdd={i % 2 === 1} isLast={i === a.length - 2} isEducation={false}/> 
                )}
            </div>
        </div>  
    );
}

export default PreviousExperiences;

