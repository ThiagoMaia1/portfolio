import React, {useEffect, useState} from 'react';
import paper from 'paper';
import './PaperElement.scss';
import useWindowResize from '../../hooks/useWindowResize';

export type OnFrameEvent = {
    time : number,
    count : number,
    delta : number,
}

export default function PaperElement({animation, children = null} 
    : {animation : (scope : paper.PaperScope) => void, children ?: React.ReactNode}) {

    const [canvasId, setCanvasId] = useState(uniqueCanvasId());

    useWindowResize(() => setCanvasId(uniqueCanvasId()));
    
    useEffect(function () {setTimeout(() => {
        let scope = new paper.PaperScope();
        scope.setup(canvasId);
        animation(scope);
    }, 0)}, [canvasId]);

    return <div className='paper-container'>
        <div className='paper-children-container'>
            {children}
        </div>
        <canvas className='paper-canvas' id={canvasId}></canvas>
    </div>
}

const uniqueCanvasId = () => 'canvas' + Math.round(new Date().getTime()/(Math.random()));