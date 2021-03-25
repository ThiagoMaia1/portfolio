import '../styles/ClosedProject.scss';

const ClosedProject = ({ logoUri, title }
    : { logoUri: string, title: string}) => {

    return (
        <div className='closed-card'>
            <img className='logo closed-project' src={require(`${logoUri}`).default} alt={`Logo ${title}`}/>
            <div className='project-title-container'>
                <div>{title.toUpperCase()}</div>
            </div>
        </div>
    )
}

export default ClosedProject;