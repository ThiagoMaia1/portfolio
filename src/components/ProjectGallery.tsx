import React from 'react';
import projects from '../models/Project/Projects';
import ProjectPreview from './ProjectPreview';
import '../styles/ProjectGallery.scss';
import SectionTitle from './SectionTitle';
import '../styles/IsometricBackground.css';
import getTranslatedSentence from '../translation/Translation';

function ProjectGallery() {

  return (
    <div className='project-section isometric-background'>
      <SectionTitle text={getTranslatedSentence('myProjects')}/>
      <div className='project-gallery-wrapper'>
        <div className='project-gallery'>
          {projects.map(p => <ProjectPreview project={p} key={p.name}/>)}
        </div>
      </div>
    </div>
  );
}

export default ProjectGallery;
