import Company from '../../../../models/Company/Company'
import './CompanyLogo.scss'

type Props = {
  company: Company
}

function CompanyLogo({ company }: Props) {
  return (
    <div className="company-logo-container">
      <a href={company.pageUrl} target={'_blank'} rel={'noopener noreferrer'}>
        <div className="company-name">{company.name}</div>
        <div className="company-logo">
          <img
            src={
              require(`../../../images/companies/${company.logoUri}`).default
            }
            alt={`Logo ${company.name}`}
          />
        </div>
      </a>
    </div>
  )
}

export default CompanyLogo
