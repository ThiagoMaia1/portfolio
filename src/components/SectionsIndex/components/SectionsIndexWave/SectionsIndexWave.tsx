import { fixedStar } from "../../../../constants/Constants";
import PaperElement from "../../../Animations/PaperElement";
import getGradient from "../../../Animations/PaperGradient";
import { Section } from "../../SectionsIndex";

function SectionsIndexWave({sections, setCurrentIndex, alignedOffsetOfHeight} 
    : {sections : Section[], setCurrentIndex : (index : number) => void, alignedOffsetOfHeight : number}) {
    const numberOfSections = sections.length;
    const extremities = 2;
    const pointsPerSection = 2;
    const numberOfWavePoints = (numberOfSections + extremities)*pointsPerSection;
    const degreesCircle = 360;
    const waveHeightFactor = 0.2;

    return (
        <PaperElement animation={(scope) => {
            let view = scope.project.view;
            const alignedOffset = window.innerHeight*alignedOffsetOfHeight;
            let wave = new scope.Path({
                strokeColor: getGradient(view.bounds, ['white', 'lightgray', 'lightgray', 'white'], scope), 
                strokeWidth: 2
            });

            const getIOffset = (i : number) => i - 0.5;
            const getX = (index : number) => 
                view.bounds.center.x*(1 + Math.sin(getIOffset(index)*Math.PI)*waveHeightFactor);

            for (let i = 0; i < numberOfWavePoints; i++) {
                wave.add(
                    new scope.Point(
                        getX(i), 
                        (getIOffset(i))*view.bounds.height/numberOfWavePoints
                    )
                )
            }
            wave.smooth();
            let { numberOfPoints, smallRadius, bigRadius, smoothing } = fixedStar;
            let star = new scope.Path();
            const starBasis = view.bounds.width*0.3;
            let scroll = 0;

            const getYOfSectionPoint = (sectionIndex : number) => 
                wave.segments[pointsPerSection*(sectionIndex) + 3].point.y;
            
            view.onFrame = () => {
                if (!scrollHasChanged() || sections.length === 0) return;
                let selectedIndex = 0;
                let tolerance = window.innerHeight*0.35;
                for (let i = 0; i < sections.length; i++) {
                    let {top} = sections[i].element.getBoundingClientRect();
                    if (top <= tolerance && top + sections[i].height > tolerance) {
                        selectedIndex = i;
                        setTimeout(() => setCurrentIndex(i), 0);
                        break;
                    };
                };

                let section = sections[selectedIndex];
                let relativeScroll = scroll + alignedOffset - section.element.offsetTop;
                let sectionHeight = (relativeScroll >= 0 || selectedIndex === 0) 
                                    ? section.height 
                                    : sections[selectedIndex - 1].height;
                let proportionateHeight = relativeScroll/sectionHeight;
                let yPoint = getYOfSectionPoint(selectedIndex);
                let yForNextPoint = getYOfSectionPoint(selectedIndex+1) - yPoint;
                let y = yPoint + yForNextPoint*proportionateHeight;
                let intersections = wave.getIntersections(new scope.Path.Line({insert: false, from: [0, y], to: [1000, y]}));
                if (intersections.length === 0) return;
                let x = intersections[0].point.x;
                star.segments = new scope.Path.Star(
                    new scope.Point(x, y), 
                    numberOfPoints, 
                    starBasis*smallRadius, 
                    starBasis*bigRadius
                ).segments;
                smoothing(star);
                star.fillColor = getGradient(star.bounds, ['#A60000', '#ff3c00'], scope);
                star.rotate((proportionateHeight + 0.5/numberOfPoints)*degreesCircle);
            }

            const scrollHasChanged = () => {
                const newScroll = document.body.scrollTop;
                const hasChanged = scroll !== newScroll;
                if (hasChanged) scroll = newScroll;
                return hasChanged;                
            }
        }}/>
    )
}

export default SectionsIndexWave;
