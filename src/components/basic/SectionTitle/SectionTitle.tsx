import './SectionTitle.scss';
import EmDash from '../EmDash/EmDash';

function SectionTitle({text} : {text : string}) {

    return (
        <div className='section-title'>
            <div>{text}</div>
            <div><EmDash/></div>
        </div>
    )
}

export default SectionTitle
