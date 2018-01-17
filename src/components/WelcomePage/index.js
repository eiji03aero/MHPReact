import { connect } from 'react-redux'
import appActions from '../../redux/actions/app.js'

import './Welcome.scss'

const mapDispatchToProps = dispatch =>
  ({
    onButtonClick () {
      dispatch(appActions.asyncError('osakabe'))
    }
  })

const WelcomePage = ({ onButtonClick }) =>
  <div className="welcome-container">
    <h1>welcome to my page!</h1>
    <p>make yourself comfortable around here!</p>
    <button
      onClick={onButtonClick} >
      Pop up test
    </button>
  </div>

export default connect(null, mapDispatchToProps)(WelcomePage)
