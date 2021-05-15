import './MainPage.scss';
import ScrollProvider from '../ScrollProvider';
import Header from '../../Header/Header';
import AboutMe from '../../AboutMe/AboutMe';
import SkillsSection from '../../Skills/SkillsSection';
import ProjectGallery from '../../ProjectGallery/ProjectGallery';
import PreviousExperiences from '../../PreviousExperiences/PreviousExperiences';
// import EducationSection from '../../EducationSection/EducationSection';
import Footer from '../../Footer/Footer';
import SectionsIndex from '../../SectionsIndex/SectionsIndex';
import Background from '../Background/Background';

const MainPage = () => {

    return (
        <ScrollProvider>
            <div id='main-page'>
                <SectionsIndex/>
                <Header/>
                <Background/>
                <div id='main-page-body'>
                    <AboutMe/>
                    <SkillsSection/>
                    <ProjectGallery/>
                    <PreviousExperiences/>
                    {/* <EducationSection/> */}
                </div>
                <Footer/>
            </div>
        </ScrollProvider>
    )
}

export default MainPage;