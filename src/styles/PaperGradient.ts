export default function getGradient(rectangle : paper.Rectangle, colors : Array<string>) {
    return {
        gradient: {
            stops: colors,
        },
        origin: rectangle.topLeft,
        destination: rectangle.bottomRight,
    }
}