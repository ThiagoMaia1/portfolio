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

export const gotoLink = (url : string) => {
    let a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.click();
} 

export function addDays(date : Date, days : number) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export function getKeyByValue<T>(object : T, value : any) {
    return Object.keys(object)
        .find(key => object[key as keyof T] === value) as keyof T;
}

export function updateHash(hash : string) {
    window.location.hash = hash;
    window.dispatchEvent(new HashChangeEvent('hashchange'));
}