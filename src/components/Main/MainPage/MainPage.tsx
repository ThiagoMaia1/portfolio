import './MainPage.scss';
import Header from '../../Header/Header';
import Loading from '../../Animations/Loading/Loading';
import AboutMe from '../../AboutMe/AboutMe';
import Skills from '../../Skills/Skills';
import ProjectGallery from '../../ProjectGallery/ProjectGallery';
import Footer from '../../Footer/Footer';
import ScrollProvider from '../ScrollProvider';

const MainPage = () => {

    return (
        // <IsometricCubes/>
        <ScrollProvider>
            <Header/>
            <div id='main-page-body'>
                <AboutMe/>
                <Skills/>
                <ProjectGallery/>
            </div>
            <Footer/>
            <div className='fixed-loading'>
                <Loading/>
            </div>
        </ScrollProvider>
    )
}

export default MainPage;