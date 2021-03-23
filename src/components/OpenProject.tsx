import React, { CSSProperties, useState } from 'react';
import useClosingAnimation from '../hooks/useClosingAnimation';
import Project from '../models/Project/Project';
import '../styles/OpenProject.scss';
import ProjectInfo from './ProjectInfo';

const OpenProject = ({project, onClick} : {project : Project, onClick : () => void}) => {

    let [ativo, setAtivo] = useState(true);
    const time = 1000;
    const style = useClosingAnimation(
        ativo,
        onClick,
        {transform: 'none', top: 0, opacity: 1},
        {transform: 'perspective(10px) rotateX(86.8deg)', top: '-50%', opacity: 0},
        time
    )

    const opacityTransition = `opacity 1ms ease-in-out ${ativo ? time : 0}ms`;
    const _onClick = () => {
        console.log(ativo);
        setAtivo(a => !a);
    };

    return (
        <div className='open-project-wrapper'>
            <div className='shadow-open-project-animation'>
                <div className='open-project project-card' 
                    style={{...style, transition: style.transition + ', ' + opacityTransition}}/>
            </div>
            <div className='display-open-project' style={{opacity: 1 - style.opacity, transition: opacityTransition}} onClick={_onClick} >
                <ProjectInfo project={project}/>
            </div>
        </div>
    )
}


export default OpenProject;