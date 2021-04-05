import PaperElement, { OnFrameEvent } from "../PaperElement";
import getGradient from "../PaperGradient";
import { WavePath } from "../Waves/Waves";
import './BackgroundWaves.scss';

function BackgroundWaves() {

    const numberOfWaves = 30;

    const Waves = () =>
        <div>
            <PaperElement animation={(scope) => {
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
                        // randomStrenghtFactor: 0.05,
                    }, scope)
                );
                waves.forEach(w => {
                    w.path.strokeColor = new scope.Color(
                        getGradient(view.bounds, ['white', '#A60000', 'white'], scope)
                    );
                    w.path.strokeWidth = 0.5;
                });

                view.onFrame = (e : OnFrameEvent) => {
                    waves.forEach(w => {
                        w.onFrameFunctions.forEach(f => f(e))
                    });
                }
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
