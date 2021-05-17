import {useCallback, useEffect} from 'react';

export default function useHashChange (callback : (hash : string) => void) {

    let _callback = useCallback(() => callback(window.location.hash.replace('#', '')), []);
    useEffect(() => {
        _callback()
    }, [_callback])
    useEffect(() => {
        const onHashChange = () =>
            _callback()
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    })
};