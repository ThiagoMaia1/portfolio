import React from 'react'
import Project from '../models/Project/Project'
import Carrossel from './Carrossel/Carrossel';
import ProjectCarrossel from './ProjectCarrossel';
import '../styles/ProjectInfo.scss';


function ProjectInfo({project} : {project : Project}) {

    return <div className='project-info-container'>
        <ProjectCarrossel project={project}/>
    </div>
}

export default ProjectInfo
