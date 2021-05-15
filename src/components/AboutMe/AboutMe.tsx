import getTranslatedSentence from '../../translation/Translation';
import AppearFromBelow from '../Animations/AppearFromBelow/AppearFromBelow';
import SectionTitle from '../basic/SectionTitle/SectionTitle';
import './AboutMe.scss';
import WavePhoto from './components/WavePhoto/WavePhoto';

function AboutMe() {

    return (
        <div id='about-me' style={{marginTop: '25vh', marginBottom: '35vh'}}>
            <SectionTitle text={getTranslatedSentence('aboutMe')}/>
            <AppearFromBelow>
                <div id='about-me-content'>
                    <div id='container-photo-thiago'>
                        <WavePhoto imageUri={'./Foto Thiago.png'}/> 
                    </div>
                    <div className='paragraph'>{getTranslatedSentence('selfDescription')}</div>       
                </div>
            </AppearFromBelow>
        </div>
    )
};

export default AboutMe;
