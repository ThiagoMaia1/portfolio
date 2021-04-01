import projects from '../../models/Project/Projects';
import ProjectCard from './../ProjectGallery/components/ProjectCard/ProjectCard';
import './ProjectGallery.scss';
import SectionTitle from './../basic/SectionTitle/SectionTitle';
import getTranslatedSentence from '../../translation/Translation';
import IsometricCubes from './../Animations/IsometricCubes/IsometricCubes';

function ProjectGallery() {
  
  console.log(window.parent, window.self, window.parent === window.self, )
  if (window.parent !== window.self) {
    setTimeout(() => {
      console.log(document.getElementById('self-card'));
      document.getElementById('self-card')?.click()
    }, 1000);
  }

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
