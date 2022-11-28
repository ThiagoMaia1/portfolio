import { useContext, useEffect, useState } from 'react'
// import $t, { sentences } from '../../translation/Translation';
import { ScrollContext } from '../Main/ScrollProvider'
import SectionsIndexWave from './components/SectionsIndexWave/SectionsIndexWave'
import './SectionsIndex.scss'
import { SectionsIndexItem } from './SectionsIndexItem'

const sectionsList = {
  'about-me': 'aboutMe',
  'skills-section': 'skills',
  'project-section': 'myProjects',
  'previous-experiences-section': 'previousExperiences',
  'education-section': 'academicFormation',
}
const sectionsIds = Object.keys(sectionsList)

export type Section = {
  id: string
  element: HTMLElement
  title: string
  height: number
}

function SectionsIndex() {
  const alignedOffsetOfHeight = 0.1
  const sections = sectionsIds.reduce((sections, id) => {
    const element = document.querySelector(`#${id}`)
    if (element instanceof HTMLElement) {
      sections.push({
        id,
        element,
        title:
          document.querySelector(`#${id} .section-title > div`)?.innerHTML ??
          id,
        height: 0,
      })
    }
    return sections
  }, [] as Section[])

  const baseTop = sections[0]?.element.parentElement?.offsetTop ?? 0
  useContext(ScrollContext)
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)

  const [isVisible, setIsVisible] = useState(
    window.innerWidth > window.innerHeight,
  )
  useEffect(() =>
    sections.forEach(
      (s, i) => {
        s.height =
          i < sections.length - 1
            ? sections[i + 1].element.offsetTop - s.element.offsetTop
            : s.element.offsetHeight
        setIsVisible(window.innerWidth > window.innerHeight)
      },
      [window.innerHeight, window.innerWidth],
    ),
  )

  if (!sections.length) {
    return null
  }
  return (
    <div
      id="sections-index-container"
      style={!isVisible ? { opacity: 0, pointerEvents: 'none' } : {}}
    >
      <SectionsIndexWave
        sections={sections}
        setCurrentIndex={setCurrentSectionIndex}
        alignedOffsetOfHeight={alignedOffsetOfHeight}
      />
      <div className="sections-index-items-container">
        {sections.map((s, i) => (
          <SectionsIndexItem
            key={s.id}
            section={s}
            isSelected={i === currentSectionIndex}
            alignedOffsetOfHeight={alignedOffsetOfHeight}
            baseTop={baseTop}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionsIndex
