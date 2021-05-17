import React, {useCallback, useEffect, useRef, useState} from 'react';
import paper from 'paper';
import './PaperElement.scss';
import useWindowResize from '../../hooks/useWindowResize';

export type OnFrameEvent = {
    time : number,
    count : number,
    delta : number,
}

export default function PaperElement({animation, children = null, shouldResize = true} 
    : {animation : (scope : paper.PaperScope, canvasId : string) => void, children ?: React.ReactNode, shouldResize ?: boolean}) {

    const [canvasId, setCanvasId] = useState(uniqueCanvasId());
    const timeout = useRef(setTimeout(() => void 0));
    const scopeRef = useRef<paper.PaperScope>();

    useWindowResize(() => {
        if (shouldResize) setCanvasId(uniqueCanvasId())
    }, 500);
    let _animation = useCallback(animation, [animation]);

    useEffect(function () {
        clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
            if (scopeRef.current !== undefined) 
                scopeRef.current.projects.forEach(p => p.remove());
            scopeRef.current = new paper.PaperScope();
            let scope = scopeRef.current;
            if (!document.querySelector(`#${canvasId}`)) 
                return;
            scope.setup(canvasId);
            _animation(scope, canvasId);
        }, 0)
    }, [canvasId, _animation]);

    return <div className='paper-container'>
        <div className='paper-children-container'>
            {children}
        </div>
        <canvas className='paper-canvas' id={canvasId}></canvas>
    </div>
}

const uniqueCanvasId = () => 'canvas' + Math.round(new Date().getTime()/(Math.random()));