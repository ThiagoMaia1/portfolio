import { createContext, CSSProperties, ReactNode, useEffect, useReducer } from 'react';

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
    // let [scroll, setScroll] = useState(0);
    const setScroll = (scrollValue : number) => dispatch({type: 'update-scroll', scrollValue});
    
    useEffect(() => {
        let listener = () => setScroll(document.body.scrollTop);
        document.body.addEventListener('scroll', listener);
        return () => document.body.removeEventListener('scroll', listener);
    }, [])

    const style : CSSProperties = {
        ['--scroll' as any]: state.scroll,
        ['--scroll-sin' as any]: state.scrollSin,
      };

    // const value = {state, dispatch}
    return <div style={style}>
        <ScrollContext.Provider value={state}>{children}</ScrollContext.Provider>
    </div>
}

export default ScrollProvider;