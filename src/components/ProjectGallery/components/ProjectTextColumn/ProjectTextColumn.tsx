import Category from '../../../../models/Category';
import Project from '../../../../models/Project/Project'
import './ProjectTextColumn.scss';
import TechnologiesSection from '../TechnologiesSection/TechnologiesSection';
import TechnologyLogo from '../../../basic/TechnologyLogo/TechnologyLogo';
import technologies from '../../../../models/Technology/Technologies';

function ProjectTextColumn({project, isVertical} : {project : Project, isVertical : boolean}) {

    const link = project.linkAfterDescription;
    const technologyItems = project.technologies.length + project.categories.length;
    const maxHeight = Math.min((technologyItems)*5.5, 60);
    return <div className='project-text-column' style={{height: (isVertical ? 64 : 100) + '%'}}>
        <div className='project-text-column-wraper'>
            <div className='project-title'>
                {project.name + (project.subtitle ? ' - ' + project.subtitle : '')}
                {!project.githubUrl ? null
                    : <> - <span className='technology-link'><a href={project.githubUrl} target={'_blank'} rel={'noopener noreferrer'}>
                        Ver no GitHub <TechnologyLogo technology={technologies.GitHub}/>
                      </a></span></>   
                }
            </div>
            <div className='categories-container' 
                 style={{maxHeight: maxHeight + '%', ...(technologyItems < 8 ? {marginBottom: 0} : {})}}>
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
                {!link ? null
                    : <a href={link.url} target='_blank'>{' ' + link.label}</a>    
                }
            </div>
        </div>
    </div>;
}

export default ProjectTextColumn;
