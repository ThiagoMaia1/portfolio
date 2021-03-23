import React from 'react';
import '../styles/ClosedProject.scss';

const ClosedProject = ({ logoUri, title, onClick }: { logoUri: string, title: string, onClick: () => void }) => {

    return (
        <div onClick={onClick} className='closed-card'>
            <img className='logo closed-project' src={`${logoUri}`} alt={`Logo ${title}`}/>
            <div className='project-title'>{title.toUpperCase()}</div>
        </div>
    )
}

export default ClosedProject;