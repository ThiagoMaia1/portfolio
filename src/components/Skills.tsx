import getTranslatedSentence from "../translation/Translation";
import SectionTitle from "./SectionTitle";

const skills = [
    
];

function Skills() {

    return (
        <div>
            <SectionTitle text={getTranslatedSentence('skills')}/>
            <div className='skillListContainer'>
                
            </div>
        </div>
    );
}

export default Skills;
