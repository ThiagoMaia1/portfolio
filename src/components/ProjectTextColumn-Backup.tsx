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

    return <div className='category-section'>
        <div className='category-title'>
            {Category[category] + 's'}
        </div>
        <div className='technology-info'>
            {technologies.map(t => 
                <div key={t.name}>
                    <div className='technology-logo-container'>
                        <img src={require(`${t.logoUri}`).default} alt={`Logo ${t.name}`}/>
                    </div>
                    <span>{t.name}</span>
                </div>
            )}
        </div>
    </div>;
}

export default ProjectTextColumn

// .project-text-column {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     font-size: initial;
//     font-weight: initial;
//     pointer-events: all;
//     height: 100%;
//     width: 100%;
// }

// .project-title {
//     font-size: 120%;
//     font-weight: 700;
//     padding-bottom: 1em;
// }

// .categories-container {
//     display: flex;
//     flex-wrap: wrap;
//     padding: 0 1vw;
//     width: 100%;

// }

// .category-section {
//     width: 50%;
//     padding-bottom: 1em;
// }

// .category-title {
//     font-size: 110%;
//     font-weight: 600;
//     width: 80%;
//     border-bottom: solid black 1px;
// }

// $logo-size: 1.5em;

// .technology-info {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;

//     > div {
//         display: flex;
//         span {
//             line-height: $logo-size;
//         }    
//         margin: 0.3em 0;
//     }

//     .technology-logo-container {
//         width: $logo-size;
//         height: $logo-size;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         margin-right: 0.5em;

//         img {
//             max-height: $logo-size;
//             max-width: $logo-size;
//             object-fit: cover;
//         }
//     }
// }

// .project-description {
//     text-align: justify;
// }