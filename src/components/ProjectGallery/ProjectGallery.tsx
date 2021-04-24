import projects from '../../models/Project/Projects';
import ProjectCard from './../ProjectGallery/components/ProjectCard/ProjectCard';
import './ProjectGallery.scss';
import SectionTitle from './../basic/SectionTitle/SectionTitle';
import getTranslatedSentence from '../../translation/Translation';
import IsometricCubes from './../Animations/IsometricCubes/IsometricCubes';
import AppearFromBelow from '../Animations/AppearFromBelow/AppearFromBelow';
import useFilterHashTechnologies from '../../hooks/useFilterHashTechnologies';

function ProjectGallery() {
  
  const maxIframes = 3;
  let depth = 0;
  if (window.top !== window.self) {
    let parentProjectSection = window.parent.document.querySelector('#project-section') as HTMLElement;
    depth = 1 + Number(parentProjectSection?.dataset.id) || -1;
    if (depth > 0 && depth <= maxIframes) {
      setTimeout(() => {
        let card = document.querySelector('#self-card .tilt-detector');
        if (card instanceof HTMLElement) card.click()
      }, 1000);
    };
  }

  let filterTechnologies = useFilterHashTechnologies();
  let filteredProjects = projects
    .filter(p => !!filterTechnologies(p.technologies))

  if (!filteredProjects.length) return null;
  return (
    <div id='project-section' className='page-section' data-id={depth}>
      <AppearFromBelow>
        <div className='isometric-cubes-container'>
          <IsometricCubes/>
        </div>
        <SectionTitle text={getTranslatedSentence('myProjects')}/>
        <div className='project-gallery-wrapper'>
          <div className='project-gallery'>
            {filteredProjects
              .map(p => <ProjectCard project={p} key={p.name}/>)}
          </div>
        </div>
      </AppearFromBelow>
    </div>
  );
}

export default ProjectGallery;
