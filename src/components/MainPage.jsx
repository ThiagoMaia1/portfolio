import React, { useEffect, useState } from 'react';
import ProjectGallery from './ProjectGallery';
import '../styles/MainPage.scss';
import Header from './Header/Header';
import Loading from './Waves/Loading';
import Footer from './Footer';
import AboutMe from './AboutMe';

const MainPage = () => {

    let [scroll, setScroll] = useState(0);
    useEffect(() => {
        let listener = () => setScroll(document.body.scrollTop);
        document.body.addEventListener('scroll', listener);
        return () => document.body.removeEventListener('scroll', listener);
    }, [])

    return (
        <div style={{'--scroll': scroll, '--scroll-sin': Math.sin(scroll*0.01)}}>
            <div>
                <Header/>
                <div id='main-page-body'>
                    <div style={{position: 'fixed', bottom: '10vh', left: '3vw'}}>
                        <Loading/>
                    </div>
                    <AboutMe/>
                    <ProjectGallery/>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default MainPage;