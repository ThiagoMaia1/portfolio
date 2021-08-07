import { useRef } from 'react';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import Project from '../../../../models/Project/Project';

export function ProjectIframe({ project }: { project: Project; }) {
    const { width, height } = useWindowDimensions();
    const ref = useRef<HTMLDivElement>(null);
    const refChild = useRef<HTMLDivElement>(null);
    const refIframe = useRef<HTMLIFrameElement>(null);

    let containerHeight = ref.current?.offsetHeight ?? 1;
    let childHeight = refChild.current?.offsetHeight ?? 1;
    let padding = childHeight - containerHeight;
    let scale = childHeight / height;
    let containerWidth = width * (containerHeight / height) + padding;
    return (
        <div ref={ref}
            className='iframe-container project-screenshot'
            style={{ width: containerWidth || 1 }}
        >
            <div ref={refChild}>
                <iframe ref={refIframe}
                    title={project.name}
                    src={project.iframeUrl}
                    style={{ transform: `scale(${scale})`, transformOrigin: 'top left', borderRadius: 0.5 / scale + 'em' }} />
            </div>
        </div>
    );
}