import React, {useEffect, useRef} from 'react';
import paper from 'paper';
import '../../styles/PaperElement.scss';

export type OnFrameEvent = {
    time : number,
    count : number,
    delta : number,
}

export default function PaperElement({animation, children = null} 
    : {animation : (scope : paper.PaperScope) => void, children ?: React.ReactNode}) {

    const idRef = useRef('canvas' + uniqueId());

    useEffect(function () {setTimeout(() => {
        var scope = new paper.PaperScope();
        scope.setup(idRef.current);
        animation(scope);
    }, 0)}, []);

    return <div className='paper-container'>
        <div className='paper-children-container'>
            {children}
        </div>
        <canvas className='paper-canvas' id={idRef.current}></canvas>
    </div>
}

const uniqueId : () => number = () => Math.round(new Date().getTime()/(Math.random()));