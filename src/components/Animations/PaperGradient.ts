export default function getGradient(
  rectangle: paper.Rectangle,
  colors: Array<string>,
  scope: paper.PaperScope,
): paper.Color {
  const gradient = new scope.Gradient()
  gradient.stops = colors.map((c) => new scope.GradientStop(new scope.Color(c)))
  return new scope.Color(gradient, rectangle.topLeft, rectangle.bottomRight)
}
