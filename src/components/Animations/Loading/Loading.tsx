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
    let left = 0.03*window.innerWidth;

    return (
        <div className='fixed-loading' style={{opacity: active ? '1' : '0', left, bottom: 0.1*window.innerHeight}}>
            <div className='loading-container'>
                <PaperElement animation={(scope, canvasId) => {
                    scope.activate();
                    const view = scope.project.view;
                    const canvasParent = document.getElementById(canvasId)?.parentElement as HTMLDivElement;
                    const canvasSize = canvasParent.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    const radius = canvasSize.width*proportionOfStar/2;
                    const lengthStarCenter = radius*1.5;
                    const starCenter = new scope.Point(lengthStarCenter, canvasSize.height - lengthStarCenter);
                    let { smoothing, numberOfPoints } = fixedStar;
                    
                    const getStar = () => {
                        const variation : number = Math.sin(localTime*3)*radius/10; 
                        const newStar = new scope.Path.Star(starCenter, numberOfPoints, radius - 2 + Math.abs(variation), radius - Math.abs(variation));
                        newStar.rotate(localTime*radius*1.5);
                        return newStar;
                    }

                    var path = getStar();
                    smoothing(path);
                    const bottomY = path.bounds.bottomRight.y;
                    const openRectangleHeight = canvasSize.height*recProportionOfCanvas;
                    const diagonalFactor = 1;//canvasSize.width*recProportionOfCanvas/openRectangleHeight;
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

                    const fillGradient = () => {
                        let scroll = Math.max(0, document.body.scrollTop - windowHeight*0.2)*5;
                        return getGradient(
                            new scope.Rectangle(
                                path.bounds.topLeft,
                                new scope.Point(
                                    Math.max(window.innerWidth - left - scroll, path.bounds.bottomRight.x),
                                    bottomY
                                )
                            ), 
                            ['#A60000', '#ff3c00'], 
                            scope
                        )
                    }

                    const compoundPath = new scope.CompoundPath({
                        children: [path, getRectangle(0, 0)], 
                        fillColor: fillGradient(),
                    });

                    let text = new scope.PointText({point: starCenter, style: paperTextStyle(scope), content: 'T'});
                    text.position.y += text.bounds.height/3.3;

                    view.onFrame = draw;

                    function draw(event : OnFrameEvent) {
                        localTime += event.delta;
                        scope.activate();
                        const newStar = getStar();
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
                        compoundPath.fillColor = fillGradient()

                        let signal = 0;
                        if (mouseIsOverCanvas && rectangleHeight < openRectangleHeight) signal = 1;
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
