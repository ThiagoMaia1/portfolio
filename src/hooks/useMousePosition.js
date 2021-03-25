import { useState, useEffect } from 'react';

const useMousePosition = (el) => {
    let base = [0, 0];
    let [coordenadas, setCoordenadas] = useState(base);
    let elemento = el || document.body;
    
    const onMouseMove = e => {
        let center = getOrigem();
        let novasCoordenadas = [
            -(e.clientX - center[0]), 
            -(e.clientY - center[1])
        ];
        setCoordenadas(novasCoordenadas);
    }

    const onMouseLeave = () => setCoordenadas(getOrigem());

    const getOrigem = () => {
        let height, width;
        if (el) {
            let rect = el.getBoundingClientRect();
            height = rect.height;
            width = rect.width;
            return [rect.x + rect.width/2, rect.y + rect.height/2];
        } else {
            return [window.innerWidth/2, window.innerHeight/2];
        }
    }

    useEffect(() => { 
        let alvo = elemento;
        alvo.addEventListener('mousemove', onMouseMove);
        alvo.addEventListener('mouseleave', onMouseLeave);
        return () => {
            let alvo = elemento;
            alvo.removeEventListener('mousemove', onMouseMove);
            alvo.removeEventListener('mouseleave', onMouseLeave);
        };
    }, [elemento]);

    return coordenadas;
};

export default useMousePosition;