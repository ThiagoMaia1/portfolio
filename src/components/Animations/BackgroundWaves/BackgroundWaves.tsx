import PaperElement from "../PaperElement";
import getGradient from "../PaperGradient";
import { WavePath } from "../Waves/Waves";
import './BackgroundWaves.scss';

function BackgroundWaves() {

    const numberOfWaves = 30;

    const Waves = () =>
        <div className='background waves'>
            <PaperElement shouldResize={false} animation={(scope) => {
                scope.activate();
                let view = scope.project.view;
                const waves = Array(numberOfWaves).fill(0).map((_, i) =>
                    new WavePath({
                        container : new scope.Rectangle(new scope.Point(0, view.bounds.height*0.005*(1 + i)), view.bounds.bottomRight),
                        points: 30,
                        height: view.bounds.height*0.02,
                        side: -1,
                        sideWidth: undefined,
                        animationFunction: (e, i) => -e.time*0.2 + i,
                        inclinationFactor: undefined,
                    }, scope)
                );
                waves.forEach(w => {
                    w.path.strokeColor = new scope.Color(
                        getGradient(
                            new scope.Rectangle(view.bounds.topCenter, view.bounds.bottomCenter), 
                            ['#ff0000', 'transparent'], 
                            scope
                        )
                    );
                    w.path.strokeWidth = 0.5;
                });

                // view.onFrame = (e : OnFrameEvent) => {
                    waves.forEach(w => {
                        w.onFrameFunctions.forEach(f => f({time: 0, delta: 0, count: 0}));
                        // w.onFrameFunctions.forEach(f => f(e))
                    });
                // }
            }}/>    
        </div>


    return (
        <div id='wave-background'>
            <Waves/>
            <Waves/>
        </div>
    )
}
export default BackgroundWaves;
