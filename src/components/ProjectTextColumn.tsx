import React from 'react'
import Category from '../models/Category';
import Project from '../models/Project/Project'
import Technology from '../models/Technology/Technology';
import '../styles/ProjectTextColumn.scss';
import './logos/technologies/ReactJs.png'

function ProjectTextColumn({project} : {project : Project}) {

    return <div className='project-text-column'>
        <div className='project-title'>
            {project.name}
        </div>
        <div className='categories-container'>
            {project.categories.map(c => 
                <TechnologiesSection 
                    category={c} 
                    technologies={project.getCategoryTechnologies(c)} 
                    key={Category[c]}
                />
            )}
        </div>
        <div className='project-description'>
            {project.description}
        </div>
    </div>;
}

function TechnologiesSection({category, technologies} 
    : {category : Category, technologies : Technology[]}) {

    return <>
        <div className='category-title'>
            {Category[category] + 's'}
        </div>
        {technologies.map(t => 
            <div className='technology-info' key={t.name}>
                <div className='technology-logo-container'>
                    <img src={require(`${t.logoUri}`).default} alt={`Logo ${t.name}`}/>
                </div>
                <span>{t.name}</span>
            </div>
        )}
    </>;
}

export default ProjectTextColumn
