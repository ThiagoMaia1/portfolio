import React, { useCallback, useRef, useState } from 'react'
import useHashChange from '../../hooks/useHashChange'
import { getTechnologies } from '../../hooks/useHashTechnologies'
import projects from '../../models/Project/Projects'
import technologies from '../../models/Technology/Technologies'
import $t from '../../translation/Translation'
import AppearFromBelow from '../Animations/AppearFromBelow/AppearFromBelow'
import SectionTitle from '../basic/SectionTitle/SectionTitle'
import Skills from './components/Skills'
import SeeTechnologyFamily from './components/SeeTechnologyFamily'
import './SkillsSection.scss'
import { updateHash } from '../../constants/FuncoesGeraisTS'
import professionalExperiences from '../../models/ProfessionalExperience/ProfessionalExperiences'

const t = technologies
const termSeparator = '|'

const mainSkills = [
  t.Typescript,
  t.NodeJs,
  t.ReactJs,
  t.ReactNative,
  t.NextJs,
  t.Jest,
  t.Cypress,
  t.Storybook,
  t.Flutter,
  t.Dart,
  t.GitHub,
  t.PostgreSQL,
  t.SQL,
  t.Firebase,
  t.ForeignLanguage,
]

const unlistedSkills = [
  t.AWS,
  t.AdobePhotoshop,
  t.AdobePremiere,
  t.AdobeIllustrator,
  t.AdobeIndesign,
  t.AdobeLightroom,
  t.MySQL,
]

const usedTechnologies = [
  ...projects.map((p) => p.technologies),
  ...unlistedSkills,
  ...professionalExperiences.map((e) => e.skillSet),
].flat()
const uniqueTechnologies = [...new Set(usedTechnologies)]
const otherSkills = uniqueTechnologies.filter((t) => !mainSkills.includes(t))
const allSkills = mainSkills.concat(otherSkills)

function SkillsSection() {
  const [searchTerm, setSearchTerm] = useState('')
  const searchBarRef = useRef<HTMLInputElement>(null)
  const sectionRef = useRef<HTMLInputElement>(null)
  const setTermo = useCallback((searchTerm: string) => {
    setSearchTerm(searchTerm)
    window.dispatchEvent(new Event('resize'))
  }, [])

  const mainList = searchTerm
    ? allSkills.filter((s) => {
        const terms = searchTerm
          .split(termSeparator)
          .filter((t) => t !== '')
          .map((t) => t.trim())
        return terms.filter((t) => new RegExp(t, 'gi').test(s.name)).length
      })
    : mainSkills

  const otherList = searchTerm ? [] : otherSkills
  const hashCallback = useCallback(
    (hash: string, isFirstTime: boolean) => {
      const technologiesHash = getTechnologies(hash)
      if (technologiesHash.length === 1) {
        setTermo(technologies[technologiesHash[0]].name)
      }
      if (
        (technologiesHash.length > 0 || !isFirstTime) &&
        sectionRef.current !== null
      ) {
        document.body.scroll({
          top:
            sectionRef.current.offsetTop -
            0.1 * window.innerHeight +
            (document.querySelector('#about-me')?.parentElement?.offsetTop ??
              0),
        })
      }
    },
    [setTermo],
  )
  useHashChange(hashCallback)

  return (
    <div id="skills-section" ref={sectionRef}>
      <SectionTitle text={$t('skills')} />
      <AppearFromBelow>
        <div className="filter-input-container">
          <input
            ref={searchBarRef}
            value={searchTerm}
            onChange={(e) => setTermo(e.target.value)}
            autoComplete="false"
            placeholder={$t('search')}
          ></input>
          <div
            className="closing-x"
            style={!searchTerm ? { visibility: 'hidden' } : {}}
            onClick={() => {
              setSearchTerm('')
              updateHash('')
              searchBarRef.current?.focus()
            }}
          />
        </div>
        <Skills mainSkills={mainList} otherSkills={otherList} />
        <SeeTechnologyFamily setSearchTerm={setSearchTerm} />
      </AppearFromBelow>
    </div>
  )
}

export default SkillsSection
