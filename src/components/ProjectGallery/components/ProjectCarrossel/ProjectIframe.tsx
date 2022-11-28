import { useRef } from 'react'
import useWindowDimensions from '../../../../hooks/useWindowDimensions'
import Project from '../../../../models/Project/Project'

type Props = {
  project: Project
}

export function ProjectIframe({ project }: Props) {
  const { width, height } = useWindowDimensions()
  const ref = useRef<HTMLDivElement>(null)
  const refChild = useRef<HTMLDivElement>(null)
  const refIframe = useRef<HTMLIFrameElement>(null)

  const containerHeight = ref.current?.offsetHeight ?? 1
  const childHeight = refChild.current?.offsetHeight ?? 1
  const padding = childHeight - containerHeight
  const scale = childHeight / height
  const containerWidth = width * (containerHeight / height) + padding
  return (
    <div
      ref={ref}
      className="iframe-container project-screenshot"
      style={{ width: containerWidth || 1 }}
    >
      <div ref={refChild}>
        <iframe
          ref={refIframe}
          title={project.name}
          src={project.iframeUrl}
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            borderRadius: 0.5 / scale + 'em',
          }}
        />
      </div>
    </div>
  )
}
