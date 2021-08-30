import {useCallback, useEffect} from 'react';

export default function useHashChange (callback : (hash : string, isFirstTime : boolean) => void) {

    let _callback = useCallback(
        (isFirstTime : boolean) => callback(window.location.hash.replace('#', ''), isFirstTime)
    , [callback]);
    useEffect(() => {
        _callback(true)
    }, [_callback])
    useEffect(() => {
        const onHashChange = () =>
            _callback(false)
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    })
};