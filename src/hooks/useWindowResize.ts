import {useEffect} from 'react';

type Size = {width : number, height : number};

export default function useWindowResize (callback : (size : Size) => void) {

    useEffect(() => {
        const onResize = () => callback({
            width: window.innerWidth,
            height: window.innerHeight
        });
        window.addEventListener('resize', onResize);
        return window.removeEventListener('resize', onResize);
    })
};