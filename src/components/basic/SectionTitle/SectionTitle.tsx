import './SectionTitle.scss'
import EmDash from '../EmDash/EmDash'
import AppearFromBelow from '../../Animations/AppearFromBelow/AppearFromBelow'

type Props = {
  text: string
}

function SectionTitle({ text }: Props) {
  return (
    <AppearFromBelow>
      <div className="section-title">
        <div>{text}</div>
        <div>
          <EmDash />
        </div>
      </div>
    </AppearFromBelow>
  )
}

export default SectionTitle
