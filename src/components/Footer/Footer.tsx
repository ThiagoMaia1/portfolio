import PaperElement, { OnFrameEvent } from '../Animations/PaperElement';
import { addShadow, Sides, WavePath } from '../Animations/Waves/Waves'
import './Footer.scss';
import ContactInfo from '../basic/ContactInfo/ContactInfo';

function Footer() {

    return <div id='footer-container' style={{marginTop: '120vh'}}>
        <PaperElement animation={(scope) => {
            scope.activate();
            let view = scope.project.view;
            let waves = [
                new WavePath({
                    height: 20 + view.bounds.width*0.02,
                    container: view.bounds,
                    fillColor: '#6e7577',
                    side: Sides.up,
                    points: 7,
                    inclinationFactor: -0.2,
                    animationFunction: (_, i) => -i,
                    sideWidth: 200,
                }, scope),
                new WavePath({
                    height: 20 + view.bounds.width*0.01,
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
        <div id='bottom-bar-info'>
            <ContactInfo/>
        </div>
        </PaperElement>

    </div>
}

export default Footer
