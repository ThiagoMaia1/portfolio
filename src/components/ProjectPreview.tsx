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

    function scrollTo(duration : number, targetY : number, tolerance : number = 5) {
        let b = document.body;
        let mspf = 1000/60; //miliseconds per frame;
        let step = -(b.scrollTop - targetY)/(duration/mspf);
        let interval = setInterval(() => {
            if (b.scrollTop >= targetY - tolerance && b.scrollTop <= targetY + tolerance)
            clearInterval(interval);
            b.scrollTop = b.scrollTop + step;
        }, mspf);
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