import getGradient from '../../Animations/PaperGradient';
import getTranslatedSentence from '../../../translation/Translation';
import PaperElement, { OnFrameEvent } from '../../Animations/PaperElement';
import {WavePath, Sides, addShadow} from '../../Animations/Waves/Waves';
import { fixedStar, paperTextStyle } from '../../../constants/Constants';
import Loading from '../../Animations/Loading/Loading';
import { useState } from 'react';

function HeaderWaves() {

    let [separateLoading, setSeparateLoading] = useState(false);
    let time = 0;

    return <PaperElement animation={(scope : paper.PaperScope, canvasId : string) => {
        scope.activate();
        
        let canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        
        const baseHeight = Math.min(window.innerHeight/600, window.innerWidth/1300);        
        const view = scope.project.view;
        const sideWidth = 100;
        const wavesProportionOfCanvas = 10/140;
        let bounds = new scope.Rectangle(
            view.bounds.topLeft, 
            view.bounds.bottomRight.subtract(new scope.Point(0, view.bounds.height*wavesProportionOfCanvas))
        );

        let rect3 = new scope.Rectangle(bounds);
        rect3.height = rect3.height*0.5;
        const waves : Array<WavePath> = [
            new WavePath({
                container: rect3, 
                fillColor: getGradient(rect3, ['#330000', '#770d00'], scope),
                height: 0,
                sideWidth
            }, scope),
        ]
        let textAbove = new scope.PointText({
            point: bounds.center.add(new scope.Point(bounds.width*0.2, -bounds.height*0.4)),
            content: getTranslatedSentence('developerTitle'),
            style: paperTextStyle(scope),
        });
        textAbove.style.fontSize = 0.015*(window.innerHeight + window.innerWidth);

        let rect2 = new scope.Rectangle(bounds);
        rect2.y = rect2.height*0.05;
        rect2.height = bounds.height*0.65;
        waves.push(
            new WavePath({
                container: rect2, 
                fillColor: getGradient(rect2, ['#991200', '#880000'], scope),
                inclinationFactor: 4,
                randomStrenghtFactor: 0.10,
                points: 8,
                height: 34*baseHeight,
                side: Sides.up,
                sideWidth
            }, scope),
        );
        let text = new scope.PointText({
            point: bounds.center,
            style: paperTextStyle(scope),
            content: 'Thiago Maia' 
        });
        text.style.fontSize = 0.04*(window.innerHeight + window.innerWidth);

        let rect1 = new scope.Rectangle(bounds);
        rect1.y = rect1.height*0.43;
        rect1.height = bounds.height*0.43;
        waves.push(
            new WavePath({
                container: rect1, 
                fillColor: getGradient(rect1, ['#A60000', '#ff3c00'], scope),
                inclinationFactor: -2,
                randomStrenghtFactor: 0.1,
                points: 6,
                side: Sides.both,
                height: 30*baseHeight,
                sideWidth
            }, scope),
        );
        
        const radius = window.innerHeight*0.6*0.2/2;
        const lengthStartCenter = radius*1.5;
        let { smoothing, numberOfPoints } = fixedStar;
        let starX = sideWidth - window.innerWidth*0.0008;

        let lastWave = waves[2].path;

        const getStarBottom = () => {
            let canvasRect = canvas.getBoundingClientRect();
            return -canvasRect.top + window.innerHeight*0.9 - lengthStartCenter; 
        }

        const getStar = () => {
            let waveTop = lastWave.bounds.y + 3*radius;
            const starCenter = new scope.Point(
                starX, 
                Math.max(getStarBottom(), waveTop),
            );
            scope.activate();
            const variation : number = Math.sin(time*3)*radius/10; 
            var star = new scope.Path.Star(starCenter, numberOfPoints, radius - 2 + Math.abs(variation), radius - Math.abs(variation));
            star.rotate(time*radius*1.5);
            smoothing(star);

            return star;
        }

        let pointText = new scope.PointText({
            point: new scope.Point(starX, Math.max(getStarBottom(), bounds.height*0.9)),
            content: 'T',
            style: paperTextStyle(scope),
        });
        let unionPath = new scope.Path();

        waves.forEach(w => addShadow(w.path, scope));
        view.onFrame = draw;

        function draw(event : OnFrameEvent) {
            time += event.delta
            for (let w of waves) {
                for (let f of w.onFrameFunctions) {
                    f(event);
                }
            }

            let star = getStar();
            unionPath.remove();
            let inside = star.isInside(lastWave.bounds);
            let intersects = star.intersects(lastWave);
            lastWave.visible = !intersects && !inside;
            setSeparateLoading(!intersects && !inside);
            if (!lastWave.visible) { 
                unionPath = star.unite(lastWave) as paper.Path;        
                unionPath.fillColor = getGradient(unionPath.bounds, ['#A60000', '#ff3c00'], scope);
                smoothing(unionPath);
                unionPath.visible = true;
            } else {
                smoothing(lastWave);
            }

            pointText.visible = intersects;
            pointText.position.y = Math.max(getStarBottom(), bounds.height*0.9) + bounds.height*0.005;
            pointText.bringToFront();

            text.point.y = document.body.scrollTop*0.45 + bounds.height/2.5;
            textAbove.point.y = document.body.scrollTop*0.8 + bounds.height/8;
            
        }
    }}>
        <Loading active={separateLoading} time={time}/>
    </PaperElement>
}

export default HeaderWaves;