import { urlENADE, urlFinalPaper } from '../../../../constants/Constants'
import ProfessionalExperience from '../../../../models/ProfessionalExperience/ProfessionalExperience'
import $t, { getLanguageCode } from '../../../../translation/Translation'
import TechnologyLink from '../../../basic/TechnologyLink/TechnologyLink'
import './JobData.scss'

type Props = {
  experience: ProfessionalExperience
  isLast: boolean
}

function JobData({ experience, isLast }: Props) {
  const formatDate = (date: Date) => {
    const month = date
      .toLocaleDateString(getLanguageCode(), { month: 'short' })
      .slice(0, 3)
    return month + '/' + date.getFullYear()
  }

  let finalDate: string
  if (experience.finalDate) {
    finalDate = formatDate(experience.finalDate)
  } else {
    finalDate = $t('currentJob')
  }

  return (
    <div className="job-data" style={{ borderBottomWidth: isLast ? 0 : '1px' }}>
      <div className="job-title">{experience.title}</div>
      <div className="job-dates">
        {formatDate(experience.initialDate) + ' - ' + finalDate}
      </div>
      <div className="job-description">
        {experience.isEducation ? (
          <>
            <a href={urlENADE} target="_blank" rel="noopener noreferrer">
              {`${$t('graduationEnade')}\n\n`}
            </a>
            <a href={urlFinalPaper} target="_blank" rel="noopener noreferrer">
              {`${$t('graduationTCC')}`}
            </a>
          </>
        ) : (
          <>{experience.description}</>
        )}
      </div>
      <div className="job-skillset-container">
        {experience.skillSet.map((s) => (
          <TechnologyLink key={s.name} technology={s} includeName={false} />
        ))}
      </div>
    </div>
  )
}

export default JobData
