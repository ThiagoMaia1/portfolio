import Technology from '../../../models/Technology/Technology'

function TechnologyLogo({ technology }: { technology: Technology }) {
  return (
    <div className="technology-logo-container">
      <img
        src={require(`../../images/${technology.logoUri}`).default}
        alt={`Logo ${technology.name}`}
        title={technology.name}
      />
    </div>
  )
}

export default TechnologyLogo
