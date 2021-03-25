import React from 'react'
import PaperElement, { OnFrameEvent } from './Waves/PaperElement'

interface Props {}

function IsometricCubes(props: Props) {
    const {} = props

    return <PaperElement animation={scope => {
        scope.activate();
        let view = scope.project.view;

        let lineLength = 30;
        let baseVector = new scope.Point(lineLength, 0);
        let angles = [
            -30,
            -150,
            90,
        ]
        let vectors = angles.map(a => baseVector.rotate(a, view.bounds.topLeft));
        let randomVector = () => vectors[Math.floor(Math.random() * vectors.length)];

        let arr = Array(10).fill(0);
        let paths = arr.map(_ => new scope.Path());
        for (let p of paths) {
            p.strokeColor = new scope.Color('lightgray');// new scope.Color({hue: Math.random()*255, saturation: 1, brightness: 0.7});
            p.add(view.bounds.center); //.add(randomVector().multiply(Math.floor(Math.random()*20))));
        }
        
        let timer = 0;

        view.onFrame = (event : OnFrameEvent) => {
            if (event.time - timer < 0.5) return;
            timer = event.time;
            for (let p of paths) {
                p.add(p.lastSegment.point.add(randomVector()));
            }
        }
    }}/>
}

export default IsometricCubes
