import React, { ReactNode } from 'react'
import useAppearFromBelow from '../../../hooks/useAppearFromBelow';

function AppearFromBelow({children} : {children : ReactNode}) {

    let {style, ref} = useAppearFromBelow();

    return (
        <div ref={ref} style={{position: 'static', ...style}} className='appear-from-below'>
            <>{children}</>
        </div>
    )
}

export default AppearFromBelow;
