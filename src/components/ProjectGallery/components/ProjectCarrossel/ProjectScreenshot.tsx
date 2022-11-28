export function ProjectScreenshot({ imageUri }: { imageUri: string }) {
  return (
    <div className="project-screenshot">
      <img
        src={require(`../../../images/ScreenShots/${imageUri}`).default}
        alt=""
      />
    </div>
  )
}
