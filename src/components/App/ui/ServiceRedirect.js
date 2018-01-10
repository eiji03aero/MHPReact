import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { resetRedirectPath } from '../../../redux/actions/app.js'

const mapStateToProps = state =>
  ({
    path: state.app.redirectPath
  })

const mapDispatchToProps = dispatch =>
  ({
    onRedirect () {
      dispatch(resetRedirectPath())
    }
  })

class ServiceRedirect extends React.Component {
  componentDidUpdate () {
    this.props.onRedirect()
  }

  render () {
    const { path } = this.props
    return path === '' ?
      null :
      <Redirect to={ path } />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceRedirect)
