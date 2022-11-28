import { useState } from 'react'
import useWindowResize from '../../../../hooks/useWindowResize'
import AppearFromBelow from '../../../Animations/AppearFromBelow/AppearFromBelow'
import EmDash from '../../../basic/EmDash/EmDash'
import { CompanyWithExperiences } from '../../PreviousExperiences'
import CompanyLogo from '../CompanyLogo/CompanyLogo'
import JobData from '../JobData/JobData'
import './CompanyExperience.scss'

type Props = {
  companyWithExperiences: CompanyWithExperiences
  isOdd: boolean
  isLast: boolean
}

function CompanyExperience({ companyWithExperiences, isOdd, isLast }: Props) {
  const [isVertical, setIsVertical] = useState(
    window.innerHeight > window.innerWidth,
  )
  useWindowResize(({ width, height }) => setIsVertical(height > width))

  const flexElements = [
    <CompanyLogo key={0} company={companyWithExperiences.company} />,
    <div key={1} className="space-between"></div>,
    <div key={2}>
      {companyWithExperiences.experiences.map((e, i, a) => (
        <JobData
          key={companyWithExperiences.key + e.title}
          experience={e}
          isLast={i === a.length - 1}
        />
      ))}
    </div>,
  ]

  if (isOdd && !isVertical) {
    flexElements.reverse()
  }

  return (
    <AppearFromBelow>
      <div className="company-experience-container">
        <div
          className="company-experience"
          style={{ flexDirection: isVertical ? 'column' : 'row' }}
        >
          {flexElements}
        </div>
        {!isLast && <EmDash />}
      </div>
    </AppearFromBelow>
  )
}

export default CompanyExperience
