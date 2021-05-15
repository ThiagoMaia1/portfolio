import Project from '../../../../models/Project/Project';
import ProjectCarrossel from '../ProjectCarrossel/ProjectCarrossel';
import ProjectTextColumn from '../ProjectTextColumn/ProjectTextColumn';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import './OpenProject.scss';

const OpenProject = ({project, onClick} : {project : Project, onClick : () => void}) => {

    const {height, width} = useWindowDimensions();
    const isVertical = height > width;

    return <div className='open-project-wrapper'>
            <div className='project-info-container'>
                <ProjectCarrossel project={project} isVertical={isVertical}/>
                <ProjectTextColumn project={project} isVertical={isVertical}/>
            </div>
        </div>
}


export default OpenProject;