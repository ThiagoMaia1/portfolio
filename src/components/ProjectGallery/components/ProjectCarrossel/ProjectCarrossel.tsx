import { useRef } from 'react';
import { gotoLink } from '../../../../constants/FuncoesGeraisTS';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import Project from '../../../../models/Project/Project';
import Carrossel from '../../../basic/Carrossel/Carrossel';
import './ProjectCarrossel.scss';

function ProjectCarrossel({project, isVertical} : {project : Project, isVertical : boolean}) {
    
    const carrosselWidth = isVertical
                           ? '116vw'
                           : '73vw';

    return <div className='project-carrossel' 
                style={{maxWidth: carrosselWidth, minWidth: carrosselWidth, 
                        margin: isVertical ? '1vh -7vw -7vh -2vw' : '0 -7vw 0 2.4vw'}}>
        <Carrossel direcao={'horizontal'} tamanhoMaximo={carrosselWidth} tamanhoIcone={window.innerWidth*0.05} corGradiente={'#ba1e00'}
                style={{zIndex: 10, maxWidth: carrosselWidth, minWidth: carrosselWidth, width: carrosselWidth, height: '100%'}}
        >
            <div className='screenshot-gallery' onClick={() => gotoLink(project.url)}>
                {/* {!project.iframeUrl ? null 
                    : <ProjectIframe project={project}/>
                } */}
                {project.imagesUri.map(i => 
                    <ProjectScreenshot imageUri={i} key={i}/>
                )}
            </div>
        </Carrossel>
    </div>
}

function ProjectScreenshot({imageUri} : {imageUri : string}) {

    return (
        <div className='project-screenshot'>
            <img src={require(`../../../images/ScreenShots/${imageUri}`).default} alt=''/>
        </div>
    )
}

function ProjectIframe({project} : {project : Project}) {
    const {width, height} = useWindowDimensions();
    const ref = useRef<HTMLDivElement>(null);
    const refChild = useRef<HTMLDivElement>(null);
    const refIframe = useRef<HTMLIFrameElement>(null);

    let containerHeight = ref.current?.offsetHeight ?? 1;
    let childHeight = refChild.current?.offsetHeight ?? 1;
    let padding = childHeight - containerHeight;
    let scale = childHeight/height;
    let containerWidth = width*(containerHeight/height) + padding;
    return (
        <div ref={ref}
             className='iframe-container project-screenshot' 
             style={{width: containerWidth || 1}}
        >
            <div ref={refChild}>
                <iframe ref={refIframe}
                        title={project.name} 
                        src={project.iframeUrl} 
                        style={{transform: `scale(${scale})`, transformOrigin: 'top left', borderRadius: 0.5/scale + 'em'}}/>
            </div>
        </div>
    )
}

export default ProjectCarrossel;
