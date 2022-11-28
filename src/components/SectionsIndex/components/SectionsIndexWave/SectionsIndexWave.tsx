import { fixedStar } from '../../../../constants/Constants'
import PaperElement from '../../../Animations/PaperElement'
import getGradient from '../../../Animations/PaperGradient'
import { Section } from '../../SectionsIndex'

type Props = {
  sections: Section[]
  setCurrentIndex: (index: number) => void
  alignedOffsetOfHeight: number
}

function SectionsIndexWave({
  sections,
  setCurrentIndex,
  alignedOffsetOfHeight,
}: Props) {
  const numberOfSections = sections.length
  const extremities = 2
  const pointsPerSection = 2
  const numberOfWavePoints = (numberOfSections + extremities) * pointsPerSection
  const degreesCircle = 360
  const waveHeightFactor = 0.2

  return (
    <PaperElement
      animation={(scope) => {
        scope.activate()
        const baseTop = sections[0].element.parentElement?.offsetTop ?? 0
        const view = scope.project.view
        const alignedOffset = window.innerHeight * alignedOffsetOfHeight
        const wave = new scope.Path({
          strokeColor: getGradient(
            view.bounds,
            ['white', 'lightgray', 'lightgray', 'white'],
            scope,
          ),
          strokeWidth: 2,
        })

        const getIOffset = (i: number) => i - 0.5
        const getX = (index: number) =>
          view.bounds.center.x *
          (1 + Math.sin(getIOffset(index) * Math.PI) * waveHeightFactor)

        for (let i = 0; i < numberOfWavePoints; i++) {
          wave.add(
            new scope.Point(
              getX(i),
              (getIOffset(i) * view.bounds.height) / numberOfWavePoints,
            ),
          )
        }
        wave.smooth()
        const { numberOfPoints, smallRadius, bigRadius, smoothing } = fixedStar
        const star = new scope.Path()
        const starBasis = view.bounds.width * 0.3
        let scroll = 0

        const getYOfSectionPoint = (sectionIndex: number) =>
          wave.segments[pointsPerSection * sectionIndex + 3].point.y

        view.onFrame = () => {
          if (!scrollHasChanged() || sections.length === 0) {
            return
          }
          let selectedIndex = 0
          const tolerance = window.innerHeight * 0.35
          for (let i = 0; i < sections.length; i++) {
            const { top } = sections[i].element.getBoundingClientRect()
            if (top <= tolerance && top + sections[i].height > tolerance) {
              selectedIndex = i
              setTimeout(() => setCurrentIndex(i), 0)
              break
            }
          }

          const section = sections[selectedIndex]
          const relativeScroll =
            scroll + alignedOffset - section.element.offsetTop - baseTop
          const sectionHeight =
            relativeScroll >= 0 || selectedIndex === 0
              ? section.height
              : sections[selectedIndex - 1].height
          const proportionateHeight = relativeScroll / sectionHeight
          const yPoint = getYOfSectionPoint(selectedIndex)
          const yForNextPoint = getYOfSectionPoint(selectedIndex + 1) - yPoint
          const y = yPoint + yForNextPoint * proportionateHeight
          const intersections = wave.getIntersections(
            new scope.Path.Line({ insert: false, from: [0, y], to: [1000, y] }),
          )
          if (intersections.length === 0) {
            return
          }
          const x = intersections[0].point.x
          star.segments = new scope.Path.Star(
            new scope.Point(x, y),
            numberOfPoints,
            starBasis * smallRadius,
            starBasis * bigRadius,
          ).segments
          smoothing(star)
          star.fillColor = getGradient(
            star.bounds,
            ['#A60000', '#ff3c00'],
            scope,
          )
          star.rotate(
            (proportionateHeight + 0.5 / numberOfPoints) * degreesCircle,
          )
        }

        const scrollHasChanged = () => {
          const newScroll = document.body.scrollTop
          const hasChanged = scroll !== newScroll
          if (hasChanged) {
            scroll = newScroll
          }
          return hasChanged
        }
      }}
    />
  )
}

export default SectionsIndexWave
