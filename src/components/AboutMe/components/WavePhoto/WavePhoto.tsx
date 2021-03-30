import { useEffect, useRef, useState } from 'react'
import PaperElement from '../../../Animations/PaperElement'
import './WavePhoto.scss';
import { fixedStar } from '../../../../constants/Constants';

function WavePhoto({ imageUri }: { imageUri: string }) {

    const img = useRef(new Image());
    let [imageHasLoaded, setImageHasLoaded] = useState(false);

    useEffect(function () {
        img.current.onload = () => setImageHasLoaded(true);
        img.current.src = require(`${imageUri}`).default;
    }, [imageUri]);

    return <div className='wave-photo-container'>
        {!imageHasLoaded ? null
            : <PaperElement animation={scope => {
                scope.activate();
                let { view } = scope.project;
                let { numberOfPoints, smallRadius, bigRadius, smoothing } = fixedStar;
                let sizeFactor = view.size.height;
                const radius = view.size.height*0.46;
                let path = new scope.Path.Star(view.bounds.center, numberOfPoints, bigRadius*sizeFactor, smallRadius*sizeFactor);
                smoothing(path);

                let raster = new scope.Raster(img.current);
                raster.position = view.center;
                raster.position.y += 40;
                raster.scale(0.45);

                let rect = new scope.Path.Rectangle(view.bounds);
                // rect.fillColor = new scope.Color('yellow');

                let group = new scope.Group([path, raster, rect]);
                group.clipped = true;

                view.onFrame = draw;
                let time = 0;

                function draw(event : any) {
                    time += event.delta;
                    scope.activate();
                    const variation : number = Math.sin(time/2)*radius/15; 
                    var newStar = new scope.Path.Star(view.center, numberOfPoints, radius - 2 + Math.abs(variation), radius - Math.abs(variation));
                    newStar.rotate(time*radius*0.05);
                    path.segments = newStar.segments;
                    smoothing(path);
                }
            }} />
        }
    </div>
}

export default WavePhoto
