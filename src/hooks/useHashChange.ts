import {useEffect} from 'react';

export default function useHashChange (callback : (hash : string) => void) {

    useEffect(() => {
        const onHashChange = () =>
            callback(window.location.hash.replace('#', ''))
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    })
};