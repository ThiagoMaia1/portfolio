import { gotoLink } from '../../../../constants/FuncoesGeraisTS';
import Project from '../../../../models/Project/Project';
import Carrossel from '../../../basic/Carrossel/Carrossel';
import './ProjectCarrossel.scss';
import { ProjectIframe } from './ProjectIframe';
import { ProjectScreenshot } from './ProjectScreenshot';

function ProjectCarrossel({project, isVertical} : {project : Project, isVertical : boolean}) {
    
    const carrosselWidth = isVertical
                           ? '100vw'
                           : '73vw';

    return <div className='project-carrossel' 
                style={{
                    maxWidth: carrosselWidth, 
                    minWidth: carrosselWidth,
                    marginBottom: isVertical ? '-5vh': ''
                }}
            >
        <Carrossel direcao={'horizontal'} 
            tamanhoMaximo={carrosselWidth} 
            tamanhoIcone={window.innerWidth*0.04} 
            corGradiente={'#ba1e00'}
            style={{
                zIndex: 10, 
                maxWidth: carrosselWidth, 
                minWidth: carrosselWidth, 
                width: carrosselWidth, 
                height: '100%', 
            }}
        >
            <div className='screenshot-gallery' onClick={() => gotoLink(project.url)}>
                {project.iframeUrl && !isVertical && 
                    <ProjectIframe project={project}/>
                }
                {project.imagesUri.map(i => 
                    <ProjectScreenshot imageUri={i} key={i}/>
                )}
            </div>
        </Carrossel>
    </div>
}

export default ProjectCarrossel;