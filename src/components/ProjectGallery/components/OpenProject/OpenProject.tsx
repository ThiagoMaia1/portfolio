import { LegacyRef, useState } from 'react';
import useClosingAnimation from '../../../../hooks/useClosingAnimation';
import useOutsideClick from '../../../../hooks/useOutsideClick';
import Project from '../../../../models/Project/Project';
import './OpenProject.scss';
import ProjectCarrossel from '../ProjectCarrossel/ProjectCarrossel';
import ProjectTextColumn from '../ProjectTextColumn/ProjectTextColumn';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';

const OpenProject = ({project, onClick} : {project : Project, onClick : () => void}) => {

    let [ativo, setAtivo] = useState(true);
    const time = 1000;

    const fechar = () => setAtivo(false);

    const style = useClosingAnimation(
        ativo,
        onClick,
        {transform: 'none', top: 0, opacity: 1},
        {transform: 'perspective(10px) rotateX(86.8deg)', top: '-50%', opacity: 0},
        time
    )

    const ref = useOutsideClick(fechar);

    const opacityTransition = `opacity 1ms ease-in-out ${ativo ? time : 0}ms`;
    const {height, width} = useWindowDimensions();
    const isVertical = height > width;

    return <div className='open-project-wrapper' ref={ref as unknown as LegacyRef<HTMLDivElement>}>
            <div className='shadow-open-project-animation'>
                <div className='open-project project-card' 
                    style={{...style, transition: style.transition + ', ' + opacityTransition}}/>
            </div>
            <div className='display-open-project' style={{opacity: 1 - style.opacity, transition: opacityTransition}}>
                <div className='project-info-container'>
                    <ProjectCarrossel project={project} isVertical={isVertical}/>
                    <ProjectTextColumn project={project} isVertical={isVertical}/>
                </div>
            </div>
        </div>
}


export default OpenProject;