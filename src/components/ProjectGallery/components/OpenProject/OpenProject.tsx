import { useEffect, useRef, useState } from 'react';
import useClosingAnimation from '../../../../hooks/useClosingAnimation';
import Project from '../../../../models/Project/Project';
import ProjectCarrossel from '../ProjectCarrossel/ProjectCarrossel';
import ProjectTextColumn from '../ProjectTextColumn/ProjectTextColumn';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import './OpenProject.scss';

const OpenProject = ({project, onClick} : {project : Project, onClick : () => void}) => {

    let [ativo, setAtivo] = useState(true);
    let [scrollOutside, setScrollOutside] = useState(0);
    let timeoutScroll = useRef(setTimeout(() => void 0, 0));
    useEffect(() => {
        clearTimeout(timeoutScroll.current);
        if(Math.abs(scrollOutside) > 200) {
            close();
            setScrollOutside(0);
        }
        timeoutScroll.current = setTimeout(() => setScrollOutside(0), 2000)
    }, [scrollOutside, timeoutScroll]);

    const time = 1000;

    const close = () => setAtivo(false);

    const style = useClosingAnimation(
        ativo,
        onClick,
        {transform: 'none', top: 0, opacity: 1},
        {transform: 'perspective(10px) rotateX(86.8deg)', top: '-50%', opacity: 0},
        time
    )

    const opacityTransition = `opacity 1ms ease-in-out ${ativo ? time : 0}ms`;
    const {height, width} = useWindowDimensions();
    const isVertical = height > width;

    return <div className='open-project-wrapper'>
            <div className='shadow-open-project-animation'>
                <div className='open-project project-card' 
                    style={{...style, transition: style.transition + ', ' + opacityTransition}}/>
            </div>
            <div className='display-open-project' style={{opacity: 1 - style.opacity, transition: opacityTransition}}
                 onClick={e => {if (e.target === e.currentTarget) close();}}
                 onWheel={e => setScrollOutside(s => s + e.deltaY)}>
                <div>
                    <div className='closing-x' onClick={close}/>
                    <div className='project-info-container'
                         onWheel={e => e.stopPropagation()}    
                    >
                        <ProjectCarrossel project={project} isVertical={isVertical}/>
                        <ProjectTextColumn project={project} isVertical={isVertical}/>
                    </div>
                </div>
            </div>
        </div>
}


export default OpenProject;