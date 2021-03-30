import getTranslatedSentence from '../../translation/Translation';
import SectionTitle from '../basic/SectionTitle/SectionTitle';
import './AboutMe.scss';
import WavePhoto from './components/WavePhoto/WavePhoto';

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
