import Category from '../../../../models/Category';
import Project from '../../../../models/Project/Project'
import './ProjectTextColumn.scss';
import TechnologiesSection from '../TechnologiesSection/TechnologiesSection';

function ProjectTextColumn({project} : {project : Project}) {

    return <div className='project-text-column'>
        <div className='project-text-column-wraper'>
            <div className='project-title'>
                {project.name + (project.subtitle ? ' - ' + project.subtitle : '')}
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
        </div>
    </div>;
}

export default ProjectTextColumn;
