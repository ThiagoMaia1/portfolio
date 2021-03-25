import getTranslatedSentence from '../translation/Translation';
import SectionTitle from './SectionTitle';
import '../styles/AboutMe.scss';
import WavePhoto from './WavePhoto';

function AboutMe() {

    return <div id='about-me'>
        <div id='container-photo-thiago'>
            <WavePhoto imageUri={'./Foto Thiago.png'}/> 
        </div>
        <SectionTitle text={getTranslatedSentence('aboutMe')}/>
        <div className='paragraph'>{getTranslatedSentence('selfDescription')}</div>       
    </div>
}

export default AboutMe
