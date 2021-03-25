import projects from '../models/Project/Projects';
import ProjectCard from './ProjectCard';
import '../styles/ProjectGallery.scss';
import SectionTitle from './SectionTitle';
import getTranslatedSentence from '../translation/Translation';
import IsometricCubes from './IsometricCubes';

function ProjectGallery() {

  return (
    <div id='project-section'>
      <div className='isometric-cubes-container'>
        <IsometricCubes/>
      </div>
      <SectionTitle text={getTranslatedSentence('myProjects')}/>
      <div className='project-gallery-wrapper'>
        <div className='project-gallery'>
          {projects.map(p => <ProjectCard project={p} key={p.name}/>)}
        </div>
      </div>
    </div>
  );
}

export default ProjectGallery;
