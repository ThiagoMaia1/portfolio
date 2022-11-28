import './ClosedProject.scss'

type Props = {
  logoUri: string
  title: string
}

const ClosedProject = ({ logoUri, title }: Props) => {
  return (
    <div className="closed-card">
      <img
        className="logo closed-project"
        src={require(`../../../images/${logoUri}`).default}
        alt={`Logo ${title}`}
      />
      <div className="project-title-container">
        <div>{title.toUpperCase()}</div>
      </div>
    </div>
  )
}

export default ClosedProject
