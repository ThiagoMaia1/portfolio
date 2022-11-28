import IsometricCubes from '../../Animations/IsometricCubes/IsometricCubes'
import BackgroundWaves from '../../Animations/BackgroundWaves/BackgroundWaves'
import './Background.scss'

function Background() {
  return (
    <div id="background">
      <IsometricCubes />
      <BackgroundWaves />
    </div>
  )
}

export default Background
