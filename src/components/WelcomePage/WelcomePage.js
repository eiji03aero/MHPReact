import { connect } from 'react-redux'
import { getTest } from '../../redux/actions/welcomePage.js'
import './Welcome.scss'

const mapStateToProps = state =>
  ({
    message: state.welcomePage.message
  })

const mapDispatchToProps = dispatch =>
  ({
    onClick () {
      dispatch(getTest())
    }
  })

const WelcomePage = ({ message, onClick }) =>
  <div className="welcome-container">
    <h1>welcome to my page!</h1>
    <p>make yourself comfortable around here!</p>
    <p>
      <button onClick={ onClick }>click me!</button>
    </p>
    <p>{ message }</p>
  </div>

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage)
