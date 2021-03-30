import useMousePosition from './useMousePosition';

const useTilt = (ref, taxa, relativeToWindow = false) => {
    let [rect, isOutside] = [{}, true];
    if (ref.current)
        rect = ref.current.getBoundingClientRect();
    let coordenadas = useMousePosition(ref.current);

    if (rect)
        isOutside = Math.abs(coordenadas[0]) > rect.width/2 || 
                        Math.abs(coordenadas[1]) > rect.height/2;

    if (!coordenadas || isOutside) return '';
    let tamanho = relativeToWindow ? [window.innerWidth, window.innerHeight] : [rect.width, rect.height];
    let angulo = coordenadas.map((c, i) => 
        (i*2-1)*taxa*100*(-c)/tamanho[i]
    );
    let transform = `perspective(1000px) rotateX(${angulo[1]}deg) rotateY(${angulo[0]}deg)`;
    return transform;
};

export default useTilt;