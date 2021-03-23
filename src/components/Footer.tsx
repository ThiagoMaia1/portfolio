import { Color } from 'paper/dist/paper-core';
import PaperElement, { OnFrameEvent } from './Waves/PaperElement';
import { Sides, WavePath } from './Waves/Waves'
import '../styles/Footer.scss';
import BottomBarInfo from './BottomBarInfo';

function Footer() {

    return <div id='footer-container'>
        <PaperElement animation={(scope) => {
            scope.activate();
            let view = scope.project.view;
            let wave = new WavePath({
                height: 20,
                container: view.bounds,
                fillColor: '#6e7577',
                side: Sides.up,
                points: 30,
                animationFunction: (event, i) => -5*i + event.time*0.3,
                sideWidth: 500,
            }, scope); 

            wave.path.strokeColor = new Color('#a0a9ab');
            wave.path.strokeWidth = 40;
            view.onFrame = (e : OnFrameEvent) => {
                for (let f of wave.onFrameFunctions) f(e);
            }

        }}>
            <BottomBarInfo/>
        </PaperElement>

    </div>
}

export default Footer
