import Category from '../../../../models/Category'
import Project from '../../../../models/Project/Project'
import './ProjectTextColumn.scss'
import TechnologiesSection from '../TechnologiesSection/TechnologiesSection'
import TechnologyLogo from '../../../basic/TechnologyLogo/TechnologyLogo'
import technologies from '../../../../models/Technology/Technologies'
import $t from '../../../../translation/Translation'

type Props = {
  project: Project
  isVertical: boolean
}

function ProjectTextColumn({ project, isVertical }: Props) {
  const link = project.linkAfterDescription
  const technologyItems =
    project.technologies.length + project.categories.length
  const maxHeight = technologyItems * 6
  return (
    <div
      className="project-text-column"
      style={{ height: (isVertical ? 60 : 100) + '%' }}
    >
      <div className="project-text-column-wraper">
        <div className="project-title">
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            {project.name + (project.subtitle ? ' - ' + project.subtitle : '')}
          </a>
          {project.githubUrl && (
            <>
              {' '}
              -{' '}
              <span className="technology-link">
                <a
                  href={project.githubUrl}
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                >
                  {$t('seeOnGithub') + '  '}
                  <TechnologyLogo technology={technologies.GitHub} />
                </a>
              </span>
            </>
          )}
        </div>
        <div
          className="categories-container"
          style={{
            maxHeight: maxHeight + '%',
            ...(technologyItems < 8 ? { marginBottom: 0 } : {}),
          }}
        >
          {project.categories.map((c) => (
            <TechnologiesSection
              category={c}
              technologies={project.getCategoryTechnologies(c)}
              key={Category[c]}
            />
          ))}
        </div>
        <div className="project-description">
          {project.description}
          {link && (
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {' ' + link.label}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectTextColumn
