export type Coordinates = {
    top ?: number;
    left ?: number;
}

export function getCoords(elem : HTMLElement, x = 0, y = 0) {
    var box = elem.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    var top  = box.top +  scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    var width = elem.offsetWidth;
    var height = elem.offsetHeight;

    left = left + x*width;
    top = top + y*height;

    return {top: Math.round(top), left: Math.round(left)};
}
