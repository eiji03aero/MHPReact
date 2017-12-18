import { connect } from 'react-redux'

import './stylesheets/LoadingSpinner.scss'

const propTypes = {
  show: PropTypes.bool
}

const defaultProps = {
  show: false
}

const mapStateToProps = state =>
  ({
    show: state.app.loading
  })

const LoadingSpinner = ({ show }) => {
  return show ?
    <div className="loader-ring">
      <div className="loader-ring-light"></div>
      <div className="loader-ring-track"></div>
    </div> :
    null
}

LoadingSpinner.propTypes = propTypes
LoadingSpinner.defaultProps = defaultProps

export default connect(mapStateToProps, null)(LoadingSpinner)
