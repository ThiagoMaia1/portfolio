import Category from '../../../../models/Category'
import Technology from '../../../../models/Technology/Technology'
import TechnologyLink from '../../../basic/TechnologyLink/TechnologyLink'
import './TechnologiesSection.scss'

type Props = {
  category: Category
  technologies: Technology[]
}

function TechnologiesSection({ category, technologies }: Props) {
  return (
    <div className="category-section">
      <div className="category-title">{Category[category] + 's'}</div>
      <div className="technology-info">
        {technologies.map((t) => (
          <TechnologyLink key={t.name} technology={t} />
        ))}
      </div>
    </div>
  )
}

export default TechnologiesSection
