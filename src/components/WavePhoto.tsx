import React, { useEffect, useRef, useState } from 'react'
import PaperElement, { OnFrameEvent } from './Waves/PaperElement'
import { WavePath } from './Waves/Waves';
import '../styles/WavePhoto.scss';

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
                let rect = new scope.Rectangle(view.bounds);
                rect.height = rect.height * 0.6;
                rect.x = rect.x * 0.2;
                let wave = new WavePath(
                    {
                        height: 20,
                        fillColor: new scope.Color('transparent'),
                        container: rect,
                        points: 12,
                        sideWidth: -150,
                    },
                    scope
                )

                let raster = new scope.Raster(img.current);
                raster.position = view.center;
                raster.rotate(-90);
                raster.scale(0.3);

                let group = new scope.Group([wave.path, raster]);
                group.clipped = true;

                view.onFrame = (event: OnFrameEvent) => {
                    for (let f of wave.onFrameFunctions)
                        f(event);
                }

            }} />
        }
    </div>
}

export default WavePhoto
