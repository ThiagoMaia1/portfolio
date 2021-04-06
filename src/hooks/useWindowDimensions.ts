import {useEffect, useState} from 'react';
import useWindowResize from './useWindowResize';

type Size = {width : number, height : number};

export default function useWindowDimensions (callback ?: (size : Size) => void) : Size {

    let [height, setHeight] = useState(0);
    let [width, setWidth] = useState(0);

    useWindowResize(({width, height}) => {
        setHeight(height);
        setWidth(width);
    })
    useEffect(() => {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
        callback?.({height, width});
    }, [height, width, setHeight, setWidth, callback]);

    return {height, width};
};