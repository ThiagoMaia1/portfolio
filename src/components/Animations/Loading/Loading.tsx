import PaperElement from '../PaperElement'
import getGradient from '../PaperGradient';
import './Loading.scss';
import { fixedStar } from '../../../constants/Constants';
import React, { useRef } from 'react';
import FloatingContactInfo from './FloatingContactInfo';

function Loading() {
    const proportionOfStar = 0.2;
    const ref = useRef<HTMLDivElement>(null);
    const recProportionOfCanvas = 0.7;
    const closedRectangleHeight = 10;
    const changeSizeSpeed = 6;

    return (
        <div className='fixed-loading'>
            <div className='loading-container'>
                <PaperElement animation={(scope : paper.PaperScope) => {
                    scope.activate();
                    const view = scope.project.view;
                    const radius = view.size.width*proportionOfStar/2;
                    const lengthStartCenter = radius*1.5;
                    const starCenter = new scope.Point(lengthStartCenter, view.bounds.height - lengthStartCenter);
                    let { smoothing, numberOfPoints } = fixedStar;

                    var path = new scope.Path.Star(starCenter, numberOfPoints, radius, radius);
                    const openedRectangleHeight = view.bounds.height*recProportionOfCanvas;
                    const diagonalFactor = 1;//view.bounds.width*recProportionOfCanvas/openedRectangleHeight;
                    const recBaseLen = radius/2;
                    const recBase = path.bounds.center.add(new scope.Point(-recBaseLen, recBaseLen));
                    let rectangleHeight = closedRectangleHeight;
                    const getRectangle = (height : number, radius : number) => 
                        new scope.Path.Rectangle({
                            rectangle: new scope.Rectangle(
                                path.bounds.center.add(new scope.Point(height*diagonalFactor, -height)), 
                                recBase,
                            ), 
                            radius,
                            insert: false
                        });
                    const compoundPath = new scope.CompoundPath({
                        children: [path, getRectangle(0, 0)], 
                        fillColor: getGradient(path.bounds, ['#A60000', '#ff3c00'], scope)
                    });

                    let time = 0;
                    let text = new scope.PointText(starCenter);
                    text.content = 'T';
                    text.style.fontFamily = 'Roboto Slab';
                    text.style.fontWeight = 900;
                    text.style.fillColor = new scope.Color('white');
                    text.style.fontSize = '3em';
                    text.style.justification = 'center';
                    text.position.y += text.bounds.height/3.3;

                    view.onFrame = draw;

                    function draw(event : any) {
                        time += event.delta;
                        scope.activate();
                        const variation : number = Math.sin(time*3)*radius/10; 
                        var newStar = new scope.Path.Star(starCenter, numberOfPoints, radius - 2 + Math.abs(variation), radius - Math.abs(variation));
                        newStar.rotate(time*radius*1.5);
                        path.segments = newStar.segments;
                        smoothing(path);
                        if (ref.current) {
                            ref.current.style.height = compoundPath.bounds.height + 'px';
                            ref.current.style.width  = compoundPath.bounds.width + 'px';
                        }
                        let mouseIsOverCanvas = !!document.querySelector(`.${ref.current?.className}:hover`);
                        changeSize(mouseIsOverCanvas, time);
                    }

                    function changeSize(mouseIsOverCanvas : boolean, time : number) {
                        const cycle = rectangleHeight > closedRectangleHeight ? Math.abs(Math.cos(time*2)) : 0;
                        const rec = getRectangle(rectangleHeight, cycle*15 + rectangleHeight/8);
                        rec.smooth({type: 'geometric', factor: cycle*0.3 + 0.3})
                        compoundPath.children[1] = rec;
                        let signal = 0;
                        if (mouseIsOverCanvas && rectangleHeight < openedRectangleHeight) signal = 1;
                        if (!mouseIsOverCanvas && rectangleHeight > closedRectangleHeight) signal = -1;
                            rectangleHeight += signal*changeSizeSpeed;
                    }

                }}>
                    <div className='loading-gesture-detector' ref={ref}>
                        <FloatingContactInfo/>
                    </div>
                </PaperElement>
            </div>
        </div>
    )
}

export default Loading
