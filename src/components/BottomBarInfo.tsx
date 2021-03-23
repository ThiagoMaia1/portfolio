import React from 'react';
import '../styles/BottomBarInfo.scss';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'
import { IoLogoFacebook } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { emailAddress, facebookUrl, fullName, gitHubUrl, linkedinUrl } from '../constants/Constants';
import { IconType } from 'react-icons';

type Link = {
    logo : IconType;
    apelido : string;
    url : string; 
}

const linksThiago : Link[] = [
    {logo: AiOutlineGithub, apelido: 'GitHub', url: gitHubUrl},
    {logo: AiFillLinkedin, apelido: 'LinkedIn', url: linkedinUrl},
    {logo: IoLogoFacebook, apelido: 'Facebook', url: facebookUrl},
    {logo: MdEmail, apelido: emailAddress, url: 'mailto:' + emailAddress}
]

const LinksWithLogo = ({links, children} : {links : Link[], children ?: React.ReactNode}) => (
    <div className='links-container'>
        {children}
        {links.map(({logo, apelido, url}) => {
            let Logo = logo;
            return (
                <div className='bottom-bar-link-container' key={url}>
                    <a href={url} target='_blank' rel='noopener noreferrer' style={{color: 'white'}}>
                        <Logo size={window.innerHeight*0.04}/>
                        <span>{apelido}</span>
                    </a>
                </div>
        )})}
    </div>
)

function BottomBarInfo () {
    return (
        <div id='bottom-bar'>
            <div className='horizontal-section-bottom-bar'>
                <div className='bottom-bar-section'>
                    <LinksWithLogo links={linksThiago}>
                        <span className='developed-by'>Desenvolvido por {fullName}</span>
                    </LinksWithLogo>
                </div>
            </div>
        </div>
    )
}

export default BottomBarInfo;