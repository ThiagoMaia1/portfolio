import { gotoLink } from '../../../../constants/FuncoesGeraisTS';
import Project from '../../../../models/Project/Project';
import Carrossel from '../../../basic/Carrossel/Carrossel';
import './ProjectCarrossel.scss';

function ProjectCarrossel({project, isVertical} : {project : Project, isVertical : boolean}) {
    
    const carrosselWidth = isVertical
                           ? '116vw'
                           : '73vw';
 
    return <div className='project-carrossel' 
                style={{maxWidth: carrosselWidth, minWidth: carrosselWidth, 
                        margin: isVertical ? '-5vh -7vw -7vh -2vw' : '0 -7vw 0 2.4vw'}}>
        <Carrossel direcao={'horizontal'} tamanhoMaximo={carrosselWidth} tamanhoIcone={window.innerWidth*0.05} corGradiente={'#ba1e00'}
                style={{zIndex: 10, maxWidth: carrosselWidth, minWidth: carrosselWidth, width: carrosselWidth, height: '100%'}}
        >
            <div className='screenshot-gallery' onClick={() => gotoLink(project.url)}>
                {project.imagesUri.map(i => 
                    <ProjectScreenshot imageUri={i} key={i}/>
                )}
            </div>
        </Carrossel>
    </div>
}

function ProjectScreenshot({imageUri} : {imageUri : string}) {

    return imageUri === 'iframe' 
        ? <div id='iframe-loop' >
            <iframe title='iframe-loop' src={window.location.origin}></iframe>
        </div>
        : <div className='project-screenshot'>
            <img src={require(`../../../images/ScreenShots/${imageUri}`).default} alt=''/>
        </div>
    
}

export default ProjectCarrossel;
