import '../styles/MainPage.scss';
import Header from './Header/Header';
import Loading from './Waves/Loading';
import AboutMe from './AboutMe';
import Skills from './Skills';
import ProjectGallery from './ProjectGallery';
import Footer from './Footer';
import ScrollProvider from './ScrollProvider';

const MainPage = () => {

    return (
        // <IsometricCubes/>
        <ScrollProvider>
            <Header/>
            <div id='main-page-body'>
                <div style={{position: 'fixed', bottom: '10vh', left: '3vw'}}>
                    <Loading/>
                </div>
                <AboutMe/>
                <Skills/>
                <ProjectGallery/>
            </div>
            <Footer/>
        </ScrollProvider>
    )
}

export default MainPage;