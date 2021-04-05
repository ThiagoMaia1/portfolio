import PaperElement, { OnFrameEvent } from '../PaperElement'

function IsometricCubes() {

    const numberOfLines = 15;
    const lineLength = 30;
    return <PaperElement animation={scope => {
        scope.activate();
        let view = scope.project.view;

        let baseVector = new scope.Point(lineLength, 0);
        let angles = [
            -30,
            -150,
            90,
        ]
        let vectors = angles.map(a => baseVector.rotate(a, view.bounds.topLeft));
        let randomVector = () => vectors[Math.floor(Math.random() * vectors.length)];

        let arr = Array(numberOfLines).fill(0);
        let pathObjects = arr.map(_ => ({
            isExpanding: true,
            path: new scope.Path(),
        }));
        pathObjects.forEach(p => {
            // let [color, width] = i % 2 
            //                      ? ['lightgray', 1]
            //                      : ['white', 2];
            p.path.strokeColor = new scope.Color('lightgray');// new scope.Color({hue: Math.random()*255, saturation: 1, brightness: 0.7});
            p.path.strokeWidth = 0.5;
            // p.path.strokeScaling = false;
            p.path.add(view.bounds.center.add(new scope.Point(view.bounds.width/4, -view.bounds.width/4))); //.add(randomVector().multiply(Math.floor(Math.random()*20))));
        });
        
        let timer = 0;

        view.onFrame = (event : OnFrameEvent) => {
            if (event.time - timer < 0.1) return;
            timer = event.time;
            for (let p of pathObjects) {
                if (p.isExpanding)
                    if (p.path.lastSegment.point.isInside(view.bounds)) 
                        p.path.add(p.path.lastSegment.point.add(randomVector()));
                    else 
                        p.isExpanding = false;
                else
                    if (p.path.segments.length > 1)
                        p.path.lastSegment.remove();
                    else 
                        p.isExpanding = true;
            }
        }
    }}/>
}

export default IsometricCubes
