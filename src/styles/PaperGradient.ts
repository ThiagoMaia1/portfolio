import { Color, Gradient, GradientStop } from 'paper/dist/paper-core';

export default function getGradient(rectangle : paper.Rectangle, colors : Array<string>) : paper.Color {
    let gradient = new Gradient();
    gradient.stops = colors.map(c => new GradientStop(new Color(c)));
    return new Color(gradient,
        rectangle.topLeft,
        rectangle.bottomRight,
    );
}