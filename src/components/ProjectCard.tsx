import React, { CSSProperties, useCallback, useRef, useState } from 'react';
import Project from '../models/Project/Project';
import OpenProject from './OpenProject';
import ClosedProject from './ClosedProject';
import '../styles/ProjectCard.scss';
import useTilt from '../hooks/useTilt';

const ProjectCard = ({project} : {project : Project}) => {

    const [open, setOpen] = useState(false);
    const [hasTransition, setHasTransition] = useState(true);
    let refScroll = useRef<HTMLDivElement>(null);
    let refTilt = useRef<HTMLDivElement>(null);

    const transitionTime = 200;
    const removeTransition = () => setTimeout(() => setHasTransition(false), 0)//transitionTime);

    let tiltStyle = useTilt(refTilt, 0.2);

    const onClick = useCallback(() => {
        let cur = refScroll.current; 
        if (!open && cur)
            document.body.scroll({top: cur.offsetTop - window.innerHeight*0.1, left: 0, behavior: 'smooth' })
        setOpen(o => !o);
    }, [open]);
    
    const style : CSSProperties = {transform: '', transition: '', transformStyle: 'initial'};
    if (!open) {
        style.transformStyle = 'preserve-3d';
        if (tiltStyle) style.transform = tiltStyle;
        if (hasTransition || !tiltStyle) style.transition = `transform ${transitionTime}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`;
    }
    return (
        <div className={(open ? 'open ' : '') + 'project-card container'} 
             style={style}
             onMouseOver={removeTransition}
             onMouseOut={() => {
                setHasTransition(true)
                
            }}
            ref={refScroll}>
            {open 
                ? <OpenProject project={project} onClick={onClick}/> 
                : <div ref={refTilt} className='tilt-detector' onClick={onClick}>
                    <ClosedProject logoUri={project.logoUri} title={project.name}/>
                </div>
            }
        </div>
    )
}


export default ProjectCard;