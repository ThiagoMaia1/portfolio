import getTranslatedSentence from '../../translation/Translation';
import SectionTitle from '../basic/SectionTitle/SectionTitle';
import './AboutMe.scss';
import WavePhoto from './components/WavePhoto/WavePhoto';

function AboutMe() {

    return <div id='about-me'>
        <SectionTitle text={getTranslatedSentence('aboutMe')}/>
        <div id='about-me-content'>
            <div id='container-photo-thiago'>
                <WavePhoto imageUri={'./Foto Thiago.png'}/> 
            </div>
            <div className='paragraph'>{getTranslatedSentence('selfDescription')}</div>       
        </div>
    </div>
};

export default AboutMe;
