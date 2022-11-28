import ContactInfo from '../../basic/ContactInfo/ContactInfo'
import './FloatingContactInfo.scss'

function FloatingContactInfo() {
  return (
    <div className="floating-contact-info-container">
      <ContactInfo includeDevelopedBy={false} />
    </div>
  )
}

export default FloatingContactInfo
