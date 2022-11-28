import PaperElement, { OnFrameEvent } from '../PaperElement'

const numberOfLines = 15
const lineLength = 30

function IsometricCubes() {
  return (
    <div className="isometric-cubes-container background">
      <PaperElement
        animation={(scope) => {
          scope.activate()
          const view = scope.project.view

          const baseVector = new scope.Point(lineLength, 0)
          const angles = [-30, -150, 90]
          const vectors = angles.map((a) =>
            baseVector.rotate(a, view.bounds.topLeft),
          )
          const randomVector = () =>
            vectors[Math.floor(Math.random() * vectors.length)]

          const arr = Array(numberOfLines).fill(0)
          const pathObjects = arr.map((_) => ({
            isExpanding: true,
            path: new scope.Path(),
          }))
          pathObjects.forEach((p) => {
            p.path.strokeColor = new scope.Color('lightgray')
            p.path.strokeWidth = 0.5
            p.path.add(
              view.bounds.center.add(
                new scope.Point(view.bounds.width / 4, -view.bounds.width / 4),
              ),
            )
          })

          let timer = 0

          view.onFrame = (event: OnFrameEvent) => {
            if (event.time - timer < 0.1) return
            timer = event.time
            for (const p of pathObjects) {
              if (p.isExpanding)
                if (p.path.lastSegment.point.isInside(view.bounds))
                  p.path.add(p.path.lastSegment.point.add(randomVector()))
                else p.isExpanding = false
              else if (p.path.segments.length > 1) p.path.lastSegment.remove()
              else p.isExpanding = true
            }
          }
        }}
      />
    </div>
  )
}

export default IsometricCubes
