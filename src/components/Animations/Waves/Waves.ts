import { OnFrameEvent } from '../PaperElement'

export enum Sides {
  up = -1,
  both,
  down,
}

const baseWindowWidth = 1304

type WaveOnFrameFunction = (event: OnFrameEvent) => void

type WaveAnimationFunction = (event: OnFrameEvent, index: number) => number

type FillColor = any

interface WaveData {
  container: paper.Rectangle
  fillColor?: FillColor
  points?: number
  height?: number
  side?: Sides
  sideWidth?: number
  animationFunction?: WaveAnimationFunction
  inclinationFactor?: number
  randomStrenghtFactor?: number
}

export class WavePath implements WaveData {
  path: paper.Path
  scope: paper.PaperScope
  points: number
  height: number
  side: Sides
  sideWidth: number
  container: paper.Rectangle
  fillColor: FillColor
  animationFunction: WaveAnimationFunction
  onFrameFunctions: Array<WaveOnFrameFunction> = []
  inclinationFactor: number
  randomStrenghtFactor: number

  constructor(waveData: WaveData, scope: paper.PaperScope) {
    const w = waveData
    this.points = w.points ?? 15
    this.height = w.height ?? w.container.height * 0.1
    this.side = w.side ?? 1
    this.container = w.container
    this.sideWidth = ((w.sideWidth ?? 0) * window.innerWidth) / baseWindowWidth
    const sideDifPoint = new scope.Point(this.sideWidth, 0)
    // let halfHeight = new scope.Point(0, this.container.height*0.4);
    this.scope = scope
    this.fillColor = w.fillColor
    this.animationFunction =
      w.animationFunction ?? ((event, i) => event.time / 2 + i)
    this.path = new scope.Path()
    if (this.fillColor) {
      this.path.fillColor = this.fillColor
    }
    // this.path.selected = true;
    this.inclinationFactor = w.inclinationFactor ?? 0
    this.randomStrenghtFactor = w.randomStrenghtFactor ?? 0

    const c = this.container
    switch (this.side) {
      case Sides.up:
        this.createWavePoints(0.2)
        // this.path.add(c.topRight.add(halfHeight), c.bottomRight.add(sideDifPoint), c.bottomLeft.subtract(sideDifPoint), c.topLeft.add(halfHeight));
        this.path.add(
          c.bottomRight.add(sideDifPoint),
          c.bottomCenter,
          c.bottomLeft.subtract(sideDifPoint),
        )
        break
      case Sides.both:
        this.createWavePoints(0.2)
        this.path.reverse()
        this.createWavePoints(1)
        break
      case Sides.down:
        // this.path.add(c.bottomRight.subtract(halfHeight), c.topRight.add(sideDifPoint), c.topLeft.subtract(sideDifPoint), c.bottomLeft.subtract(halfHeight));
        this.path.add(
          c.topRight.add(sideDifPoint),
          c.topCenter,
          c.topLeft.subtract(sideDifPoint),
        )
        this.createWavePoints(1)
        break
    }
  }

  createWavePoints = (lineHeight: number): void => {
    for (let i = 0; i < this.points; i++) {
      this.path.add(
        new this.scope.Point(i / (this.points - 1), 1)
          .multiply(this.container.width + this.sideWidth * 2)
          .subtract(new this.scope.Point(this.sideWidth, 0)),
      )
    }

    const segmentNumber = this.path.segments.length
    const initialPoints = segmentNumber - this.points
    const heights = Array.from({ length: this.points }, () =>
      Math.floor(Math.random() * this.randomStrenghtFactor * 100),
    )

    this.onFrameFunctions.push((event: OnFrameEvent) => {
      for (let i = initialPoints; i < segmentNumber; i++) {
        const segment = this.path.segments[i]
        const sinus = Math.sin(this.animationFunction(event, i))
        segment.point.y =
          this.container.y +
          sinus * this.height +
          this.container.height * lineHeight +
          i * this.inclinationFactor +
          heights[i - initialPoints]
      }
      this.path.smooth({ type: 'catmull-rom', factor: 1 })
    })
  }
}

export const addShadow = (
  path: any,
  scope: paper.PaperScope,
  {
    blur,
    offset,
    color,
  }: { blur?: number; offset?: paper.Point; color?: paper.Color } = {},
) => {
  Object.assign(path, {
    shadowColor: color ?? new scope.Color(0, 0, 0, 0.4),
    shadowBlur: blur ?? 12,
    shadowOffset: offset ?? new scope.Point(-3, -3),
  })
}
