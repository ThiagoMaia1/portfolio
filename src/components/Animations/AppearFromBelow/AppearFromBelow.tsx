import React, { ReactNode } from 'react'
import useAppearFromBelow from '../../../hooks/useAppearFromBelow';

function AppearFromBelow({children, styleProp = {}} : {children : ReactNode, styleProp ?: object}) {

    let {style, ref} = useAppearFromBelow();

    return (
        <div ref={ref} style={{position: 'static', ...style, ...styleProp}} className='appear-from-below'>
            <>{children}</>
        </div>
    )
}

export default AppearFromBelow;
