import React from 'react'
import PaperElement from './PaperElement'
import getGradient from '../../styles/PaperGradient';
import '../../styles/Loading.scss';

function Loading() {
    return (<div className='loading-container'>
        <PaperElement animation={(scope : paper.PaperScope) => {
            scope.activate();
            const view = scope.project.view;
            const radius = view.size.width*0.4;
            var path = new scope.Path.Star(view.center, 6, radius, radius);
            // path.selected = true;
            path.fillColor = getGradient(path.bounds, ['#A60000', '#ff3c00']);

            const initialSpeedRate = 1;
            let speedRate = initialSpeedRate;
            let interval : NodeJS.Timeout;
            // let running = true;
            let time = 0;

            view.onFrame = draw;
            path.onMouseEnter = () => changeSpeed(0);
            path.onMouseLeave = () => changeSpeed(initialSpeedRate);

            function draw(event : any) {
                // if (!running) return;
                time = time + event.delta*speedRate;
                scope.activate();
                const variation : number = Math.sin(time*3)*radius/10; 
                var newStar = new scope.Path.Star(view.center, 6, radius - 2 + Math.abs(variation), radius - Math.abs(variation));
                newStar.rotate(time*radius*1.5);
                path.segments = newStar.segments;
                path.smooth({ type: 'catmull-rom', factor: 1});
            }

            function changeSpeed(target : number) {
                clearInterval(interval);
                let direction = Math.sign(target - speedRate);
                interval = setInterval(() => {
                    speedRate += direction*0.01;
                    if ((direction > 0 && speedRate > target) || (direction < 0 && speedRate < target)) clearInterval(interval);
                }, 10)
            }

        }}>
            <div className='loading-T'>
                <span>T</span>
            </div>
        </PaperElement></div>
    )
}

export default Loading
