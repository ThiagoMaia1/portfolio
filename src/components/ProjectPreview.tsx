import React, { useCallback, useRef, useState } from 'react';
import Project from '../models/Project/Project';
import OpenProject from './OpenProject';
import ClosedProject from './ClosedProject';
import '../styles/ProjectCard.scss';

const ProjectPreview = ({project} : {project : Project}) => {

    const [open, setOpen] = useState(false)
    let ref = useRef<HTMLDivElement>(null);
    
    const onClick = useCallback(() => {
        let cur = ref.current; 
        if (!open && cur)
            scrollTo(200, cur.offsetTop - window.innerHeight*0.1);
        setOpen(o => !o);
    }, [open]);

    function scrollTo(duration : number, targetY : number, tolerance : number = 2) {
        let b = document.body;
        let step = -(b.scrollTop - targetY)/duration;
        let interval = setInterval(() => {
            if (b.scrollTop >= targetY - tolerance && b.scrollTop <= targetY + tolerance)
            clearInterval(interval);
            b.scrollTop = b.scrollTop + step;
        }, 1);
    }

    return (
        <div className={(open ? 'open ' : '') + 'project-card container'} ref={ref}>
            {open 
                ? <OpenProject project={project} onClick={onClick}/> 
                : <ClosedProject logoUri={project.logoUri} title={project.name} onClick={onClick}/>
            }
        </div>
    )
}


export default ProjectPreview;