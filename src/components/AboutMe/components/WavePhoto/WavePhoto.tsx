import { useEffect, useRef, useState } from 'react'
import PaperElement from '../../../Animations/PaperElement'
import './WavePhoto.scss'
import { fixedStar } from '../../../../constants/Constants'

type Props = {
  imageUri: string
}

function WavePhoto({ imageUri }: Props) {
  const img = useRef(new Image())
  const [imageHasLoaded, setImageHasLoaded] = useState(false)

  useEffect(
    function () {
      img.current.onload = () => setImageHasLoaded(true)
      img.current.src = require(`${imageUri}`).default
    },
    [imageUri],
  )

  return (
    <div className="wave-photo-container">
      {imageHasLoaded && (
        <PaperElement
          animation={(scope) => {
            scope.activate()
            const { view } = scope.project
            const { numberOfPoints, smallRadius, bigRadius, smoothing } =
              fixedStar
            const sizeFactor = view.size.height
            const radius = view.size.height * 0.46
            const path = new scope.Path.Star(
              view.bounds.center,
              numberOfPoints,
              bigRadius * sizeFactor,
              smallRadius * sizeFactor,
            )
            smoothing(path)

            const raster = new scope.Raster(img.current)
            raster.position = view.center
            raster.position.y += view.bounds.height / 10
            raster.scale(view.bounds.height / 1000)

            const rect = new scope.Path.Rectangle(view.bounds)

            const group = new scope.Group([path, raster, rect])
            group.clipped = true

            view.onFrame = draw
            let time = 0

            function draw(event: { delta: number }) {
              time += event.delta
              scope.activate()
              const variation: number = (Math.sin(time / 2) * radius) / 15
              const newStar = new scope.Path.Star(
                view.center,
                numberOfPoints,
                radius - 2 + Math.abs(variation),
                radius - Math.abs(variation),
              )
              newStar.rotate(time * radius * 0.05)
              path.segments = newStar.segments
              smoothing(path)
            }
          }}
        />
      )}
    </div>
  )
}

export default WavePhoto
