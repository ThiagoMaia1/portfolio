import { Color } from 'paper/dist/paper-core';
import React from 'react'
import getGradient from '../../Animations/PaperGradient';
import getTranslatedSentence from '../../../translation/Translation';
import PaperElement, { OnFrameEvent } from '../../Animations/PaperElement';
import {WavePath, Sides, addShadow} from '../../Animations/Waves/Waves';


function HeaderWaves() {

    return <PaperElement animation={(scope : paper.PaperScope) => {
        scope.activate();

        const baseHeight = Math.min(window.innerHeight/600, window.innerWidth/1100);        
        const view = scope.project.view;
        const sideWidth = 100;
        
        let rect3 = new scope.Rectangle(view.bounds);
        rect3.height = rect3.height*0.5;
        const waves : Array<WavePath> = [
            new WavePath({
                container: rect3, 
                fillColor: getGradient(rect3, ['#330000', '#770d00'], scope),
                height: 0,
                sideWidth
            }, scope),
        ]
        let textAbove = new scope.PointText(view.bounds.center.add(new scope.Point(view.size.width*0.2, -view.size.height*0.4)));
        textAbove.content = getTranslatedSentence('developerTitle');
        textAbove.style.fontFamily = 'Roboto Slab';
        textAbove.style.fontWeight = 'bold';
        textAbove.style.fillColor = new Color('white');
        textAbove.style.fontSize = 30*baseHeight;
        textAbove.style.justification = 'center';

        let rect2 = new scope.Rectangle(view.bounds);
        rect2.y = rect2.height*0.05;
        rect2.height = view.size.height*0.65;
        waves.push(
            new WavePath({
                container: rect2, 
                fillColor: getGradient(rect2, ['#991200', '#880000'], scope),
                inclinationFactor: 4,
                randomStrenghtFactor: 0.10,
                points: 10,
                height: 34*baseHeight,
                side: Sides.up,
                sideWidth
            }, scope),
        );
        let text = new scope.PointText(view.bounds.center);
        text.content = 'Thiago Maia';
        text.style.fontFamily = 'Roboto Slab';
        text.style.fontWeight = 'bold';
        text.style.fillColor = new Color('white');
        text.style.fontSize = 100*baseHeight;
        text.style.justification = 'center';

        let rect1 = new scope.Rectangle(view.bounds);
        rect1.y = rect1.height*0.43;
        rect1.height = view.size.height*0.43;
        waves.push(
            new WavePath({
                container: rect1, 
                fillColor: getGradient(rect1, ['#A60000', '#ff3c00'], scope),
                inclinationFactor: -2,
                randomStrenghtFactor: 0.1,
                points: 7,
                side: Sides.both,
                height: 30*baseHeight,
                sideWidth
            }, scope),
        );

        scope.project.getItems({}).forEach(path => addShadow(path, scope));
        view.onFrame = draw;

        function draw(event : OnFrameEvent) {
            for (let w of waves) {
                for (let f of w.onFrameFunctions) {
                    f(event);
                }
            }
            text.point.y = document.body.scrollTop*0.45 + view.size.height/2.5;
            textAbove.point.y = document.body.scrollTop*0.8 + view.size.height/8;
        }
    }}/>
}

export default HeaderWaves;