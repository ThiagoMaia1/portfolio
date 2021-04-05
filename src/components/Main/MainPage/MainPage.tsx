import './MainPage.scss';
import ScrollProvider from '../ScrollProvider';
import Header from '../../Header/Header';
import AboutMe from '../../AboutMe/AboutMe';
import Skills from '../../Skills/Skills';
import ProjectGallery from '../../ProjectGallery/ProjectGallery';
import PreviousExperiences from '../../PreviousExperiences/PreviousExperiences';
import EducationSection from '../../EducationSection/EducationSection';
import Loading from '../../Animations/Loading/Loading';
import Footer from '../../Footer/Footer';

const MainPage = () => {

    return (
        // <IsometricCubes/>
        <ScrollProvider>
            <div id='main-page'>
                <Header/>
                <div id='main-page-body'>
                    <AboutMe/>
                    <Skills/>
                    <ProjectGallery/>
                    <PreviousExperiences/>
                    <EducationSection/>
                </div>
                <Footer/>
                <Loading/>
            </div>
        </ScrollProvider>
    )
}

export default MainPage;