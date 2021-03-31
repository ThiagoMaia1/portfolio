import Project from '../../../../models/Project/Project';
import Carrossel from '../../../basic/Carrossel/Carrossel';
import './ProjectCarrossel.scss';

function ProjectCarrossel({project} : {project : Project}) {
    
    const carrosselWidth = '80vw';
 
    return <div className='project-carrossel' 
                style={{maxWidth: carrosselWidth, minWidth: carrosselWidth}}>
        <Carrossel direcao={'horizontal'} tamanhoMaximo={carrosselWidth} tamanhoIcone={60} corGradiente={'#c42e00'}
                style={{zIndex: 10, maxWidth: carrosselWidth, minWidth: carrosselWidth, width: carrosselWidth, height: '100%'}}
        >
            <div className='screenshot-gallery'>
                {project.imagesUri.map(i => 
                    <ProjectScreenshot imageUri={i} key={i}/>
                )}
            </div>
        </Carrossel>
    </div>
}

function ProjectScreenshot({imageUri} : {imageUri : string}) {

    return <div className='project-screenshot'>
        <img src={require(`../../../images/ScreenShots/${imageUri}`).default} alt=''/>
    </div>
}

export default ProjectCarrossel;