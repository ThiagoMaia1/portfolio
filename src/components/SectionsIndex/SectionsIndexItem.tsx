import { Section } from './SectionsIndex'

type Props = {
  section: Section
  isSelected: boolean
  alignedOffsetOfHeight: number
  baseTop: number
}

export function SectionsIndexItem({
  section,
  isSelected,
  alignedOffsetOfHeight,
  baseTop,
}: Props) {
  const onClick = () =>
    document.body.scroll({
      top:
        section.element.offsetTop -
        alignedOffsetOfHeight * window.innerHeight +
        baseTop,
      behavior: 'smooth',
    })

  return (
    <div className="sections-index-item" onClick={onClick}>
      <div className={isSelected ? ' selected' : ''}>{section.title}</div>
    </div>
  )
}
