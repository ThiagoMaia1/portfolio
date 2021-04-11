import './SectionTitle.scss';
import EmDash from '../EmDash/EmDash';
import AppearFromBelow from '../../Animations/AppearFromBelow/AppearFromBelow';

function SectionTitle({text} : {text : string}) {

    return (
        <AppearFromBelow>
            <div className='section-title'>
                <div>{text}</div>
                <div><EmDash/></div>
            </div>
        </AppearFromBelow>
    )
}

export default SectionTitle
