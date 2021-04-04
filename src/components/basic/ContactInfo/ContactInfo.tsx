import './ContactInfo.scss';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'
import { IoLogoFacebook } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { ImStackoverflow } from 'react-icons/im';
import { emailAddress, facebookUrl, fullName, gitHubUrl, linkedinUrl, stackOverflowUrl } from '../../../constants/Constants';
import { IconType } from 'react-icons';

type Link = {
    logo : IconType;
    apelido : string;
    url : string; 
}

const links : Link[] = [
    {logo: AiOutlineGithub, apelido: 'GitHub', url: gitHubUrl},
    {logo: AiFillLinkedin, apelido: 'LinkedIn', url: linkedinUrl},
    {logo: ImStackoverflow, apelido: 'Stack Overflow', url: stackOverflowUrl},
    {logo: IoLogoFacebook, apelido: 'Facebook', url: facebookUrl},
    {logo: MdEmail, apelido: 'E-mail', url: 'mailto:' + emailAddress},
]

function ContactInfo ({includeDevelopedBy = true}) {
    return (
        <div className='items-container'>
            {!includeDevelopedBy ? null :
                <span className='developed-by'>Desenvolvido por {fullName}</span>
            }
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
}

export default ContactInfo;