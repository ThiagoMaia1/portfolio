import { createContext, CSSProperties, ReactNode, useCallback, useEffect, useReducer } from 'react';
import useWindowResize from '../../hooks/useWindowResize';

interface ScrollState {
    scroll : number;
    scrollSin : number;
}

interface Action {
    scrollValue: any;
    type : string;
}

const emptyState = {scroll: 0, scrollSin: 0};
export const ScrollContext : React.Context<ScrollState> = createContext(emptyState);

function scrollReducer(state : ScrollState, action : Action) {
    switch (action.type) {
        case 'update-scroll':
            return {
                scroll: action.scrollValue,
                scrollSin : Math.sin(action.scrollValue*0.01),
            };
        default:
            return state;
    }
}

function ScrollProvider({children} : {children : ReactNode}) {

    const [state, dispatch] = useReducer(scrollReducer, emptyState);
    const setScroll = (scrollValue : number) => dispatch({type: 'update-scroll', scrollValue});
    
    let listener = useCallback(() => setScroll(document.body.scrollTop + Math.random()/100), []);
    useEffect(() => {
        document.body.addEventListener('scroll', listener);
        return () => document.body.removeEventListener('scroll', listener);
    }, [listener])
    useWindowResize(listener);

    console.log({top: document.body.scrollTop, height: document.body.querySelector('div#root')?.clientHeight})
    const style : CSSProperties = {
        ['--scroll' as any]: state.scroll,
        ['--scroll-sin' as any]: state.scrollSin,
      };

    return <div style={style}>
        <ScrollContext.Provider value={state}>{children}</ScrollContext.Provider>
    </div>
}

export default ScrollProvider;