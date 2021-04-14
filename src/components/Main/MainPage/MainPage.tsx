import './MainPage.scss';
import ScrollProvider from '../ScrollProvider';
import Header from '../../Header/Header';
import AboutMe from '../../AboutMe/AboutMe';
import Skills from '../../Skills/Skills';
import ProjectGallery from '../../ProjectGallery/ProjectGallery';
import PreviousExperiences from '../../PreviousExperiences/PreviousExperiences';
import EducationSection from '../../EducationSection/EducationSection';
import Footer from '../../Footer/Footer';
import SectionsIndex from '../../SectionsIndex/SectionsIndex';

const MainPage = () => {

    return (
        <ScrollProvider>
            <div id='main-page'>
                <SectionsIndex/>
                {/* <Loading/> */}
                <Header/>
                <div id='main-page-body'>
                    <AboutMe/>
                    <Skills/>
                    <ProjectGallery/>
                    <PreviousExperiences/>
                    <EducationSection/>
                </div>
                <Footer/>
            </div>
        </ScrollProvider>
    )
}

export default MainPage;