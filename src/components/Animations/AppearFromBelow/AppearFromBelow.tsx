import { ReactNode } from 'react'
import useAppearFromBelow from '../../../hooks/useAppearFromBelow';

function AppearFromBelow({children, styleProp = {}} : {children : ReactNode, styleProp ?: object}) {

    return (
        <div style={{position: 'static', ...styleProp}} className='appear-from-below'>
            <>{children}</>
        </div>
    )
}

export default AppearFromBelow;
