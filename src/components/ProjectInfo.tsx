import React from 'react'
import Project from '../models/Project/Project'
import ProjectCarrossel from './ProjectCarrossel';
import '../styles/ProjectInfo.scss';
import ProjectTextColumn from './ProjectTextColumn';


function ProjectInfo({project} : {project : Project}) {

    return <div className='project-info-container'>
        <ProjectCarrossel project={project}/>
        <ProjectTextColumn project={project}/>
    </div>
}

export default ProjectInfo
