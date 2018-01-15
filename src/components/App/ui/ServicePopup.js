import { connect } from 'react-redux'

import '../stylesheets/ServicePopup.scss'

const mapStateToProps = (state) =>
  ({
    currentError: state.app.errors.current,
    showError: state.app.errors.showError
  })

class ServicePopup extends React.Component {
  constructor (props) {
    super(props)
  }



  render () {
    const { currentError } = this.props
    const errorMessage = JSON.stringify(currentError)

    return (
      <div className="popupWrapper">
        <div className="popupContainer">
          <p>
            { showError ?
                errorMessage :
                'no error here' }
          </p>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(ServicePopup)
