import {useEffect, useState} from 'react';

type Size = {width : number, height : number};

export default function useWindowResize (callback ?: (size : Size) => void) : Size {

    let [height, setHeight] = useState(0);
    let [width, setWidth] = useState(0);

    useEffect(() => {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
        callback?.({height, width});
    }, [window.innerHeight, window.innerWidth]);

    return {height, width};
};