import { Link } from 'react-router-dom'

import './stylesheets/SentenceIcon.scss'

const propTypes = {
  to: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string
}

const defaultProps = {
  to: '/',
  icon: 'arrow_left_bold_circle_outline',
  title: 'Go back'
}

const SentenceIcon = ({ to, icon, title }) =>
  <Link to={ to } className="SentenceIcon-wrapper">
    <div className="SentenceIcon u-flex">
      <i className="mdi mdi-36">{ icon }</i>
      <span className="u-fs--24">{ title }</span>
    </div>
  </Link>

SentenceIcon.propTypes = propTypes
SentenceIcon.defaultProps = defaultProps

export default SentenceIcon
