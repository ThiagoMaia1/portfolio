import React, {useEffect, useRef} from 'react';
import paper from 'paper';

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

    return <div style={{width: '100%', height: '100%', position: 'relative'}}>
        <div style={{width: '100%', height: '100%', position: 'absolute'}}>
            {children}
        </div>
        <canvas style={{width: '100%', height: '100%'}} id={idRef.current}></canvas>
    </div>
}

const uniqueId : () => number = () => Math.round(new Date().getTime() + (Math.random() * 100));