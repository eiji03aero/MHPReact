import { connect } from 'react-redux'
import appActions from '../../../redux/actions/app.js'

import '../stylesheets/ServicePopup.scss'

const propTypes = {
  currentError: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  show: PropTypes.bool,
  onHidePopup: PropTypes.func,
}

const defaultProps = {
  currentError: 'default message',
  show: false,
  onHidePopup: f => f,
}

const mapStateToProps = (state) =>
  ({
    currentError: state.app.errors.currentError,
    show: state.app.errors.showError
  })

const mapDispatchToProps = dispatch =>
  ({
    onHidePopup () {
      dispatch(appActions.hidePopup())
    }
  })

class ServicePopup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      popupTimeoutId: {}
    }
    this.setPopupTimeout = this.setPopupTimeout.bind(this)
    this.clearPopupTimeout = this.clearPopupTimeout.bind(this)
  }

  componentWillReceiveProps () {
    this.setPopupTimeout()
  }

  setPopupTimeout () {
    const { onHidePopup } = this.props

    const popupTimeoutId = setTimeout(
      onHidePopup,
      4000
    )

    this.setState({ popupTimeoutId })
  }

  clearPopupTimeout () {
    clearTimeout(this.state.popupTimeoutId)
  }

  render () {
    const { setPopupTimeout, clearPopupTimeout } = this
    const { currentError, show } = this.props
    const errorMessage = JSON.stringify(currentError)

    return show ?
      <div
        className="popupWrapper"
        onMouseEnter={clearPopupTimeout}
        onMouseLeave={setPopupTimeout} >
        <div className="popupContainer">
          <div className="popupTopBorder" />
          <div className="popupBody">
            <p className="u-fs--20 u-border-b--grey">
              Error
            </p>
            <p className="u-fs--12 u-padding-t--4">
              { currentError }
            </p>
          </div>
        </div>
      </div> :
      null
  }
}

ServicePopup.propTypes = propTypes
ServicePopup.defaultProps = defaultProps

export default connect(mapStateToProps, mapDispatchToProps)(ServicePopup)
