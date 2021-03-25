import { Color } from 'paper/dist/paper-core';
import PaperElement, { OnFrameEvent } from './Waves/PaperElement';
import { addShadow, Sides, WavePath } from './Waves/Waves'
import '../styles/Footer.scss';
import BottomBarInfo from './BottomBarInfo';

function Footer() {

    return <div id='footer-container'>
        <PaperElement animation={(scope) => {
            scope.activate();
            let view = scope.project.view;
            let waves = [
                new WavePath({
                    height: 50,
                    container: view.bounds,
                    fillColor: '#6e7577',
                    side: Sides.up,
                    points: 7,
                    inclinationFactor: -0.2,
                    animationFunction: (_, i) => -i,
                    sideWidth: 200,
                }, scope),
                new WavePath({
                    height: 40,
                    container: view.bounds,
                    fillColor: '#444444',
                    side: Sides.up,
                    points: 7,
                    inclinationFactor: 0.1,
                    animationFunction: (_, i) => i,
                    sideWidth: 200,
                }, scope),
            ];

            scope.project.getItems({})
                .forEach(path => addShadow(
                    path, 
                    scope, 
                    {blur: 5, color: new scope.Color(0, 0, 0, 0.7)}
                ));

            view.onFrame = (e : OnFrameEvent) => {
                for (let w of waves) {
                    for (let f of w.onFrameFunctions) 
                        f(e);
                }
            }

        }}>
            <BottomBarInfo/>
        </PaperElement>

    </div>
}

export default Footer
