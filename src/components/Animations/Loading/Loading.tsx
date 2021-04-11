import PaperElement, { OnFrameEvent } from '../PaperElement'
import getGradient from '../PaperGradient';
import './Loading.scss';
import { fixedStar, paperTextStyle } from '../../../constants/Constants';
import { useRef } from 'react';
import FloatingContactInfo from './FloatingContactInfo';

function Loading({active, time} : {active : boolean, time : number}) {
    
    
    const proportionOfStar = 0.2;
    const ref = useRef<HTMLDivElement>(null);
    const recProportionOfCanvas = 0.7;
    const closedRectangleHeight = 10;
    const changeSizeSpeed = 10;
    let localTime = time;

    return (
        <div className='fixed-loading' style={{display: active ? '' : 'none', left: 0.03*window.innerWidth, bottom: 0.1*window.innerHeight}}>
            <div className='loading-container'>
                <PaperElement animation={(scope : paper.PaperScope, canvasId) => {
                    console.log(canvasId);
                    scope.activate();
                    const view = scope.project.view;
                    const radius = view.size.width*proportionOfStar/2;
                    const lengthStarCenter = radius*1.5;
                    const starCenter = new scope.Point(lengthStarCenter, view.bounds.height - lengthStarCenter);
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

                    let text = new scope.PointText({point: starCenter, style: paperTextStyle(scope), content: 'T'});
                    text.position.y += text.bounds.height/3.3;

                    view.onFrame = draw;

                    function draw(event : OnFrameEvent) {
                        localTime += event.delta;
                        scope.activate();
                        const variation : number = Math.sin(localTime*3)*radius/10; 
                        var newStar = new scope.Path.Star(starCenter, numberOfPoints, radius - 2 + Math.abs(variation), radius - Math.abs(variation));
                        newStar.rotate(localTime*radius*1.5);
                        path.segments = newStar.segments;
                        smoothing(path);
                        if (ref.current) {
                            ref.current.style.height = compoundPath.bounds.height + 'px';
                            ref.current.style.width  = compoundPath.bounds.width + 'px';
                        }
                        let mouseIsOverCanvas = !!document.querySelector(`.${ref.current?.className}:hover`);
                        changeSize(mouseIsOverCanvas, localTime);
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
