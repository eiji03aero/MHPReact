import { Link } from 'react-router-dom'
import LinkIconBubble from './LinkIconBubble.js'

import './stylesheets/LinkIcon.scss'

const propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  to: PropTypes.string,
  func: PropTypes.func,
  size: PropTypes.string,
}

const defaultProps = {
  icon: 'link',
  to: 'dummy',
  func: f => f,
  size: 'small'
}

class LinkIcon extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  handleMouseEnter () {
    this.setState({ show: true })
  }

  handleMouseLeave () {
    this.setState({ show: false })
  }

  render () {
    const { title, icon, to, func, size } = this.props
    if (to !== 'dummy') {
      return (
        <Link to={ to } onMouseEnter={ this.handleMouseEnter } onMouseLeave={ this.handleMouseLeave }>
          <div className="LinkIcon">
          <i className="mdi mdi-grey mdi-24">{ icon }</i>
          <LinkIconBubble title={ title } show={ this.state.show } />
          </div>
        </Link>
      )
    } else {
      return (
        <a onClick={ func } onMouseEnter={ this.handleMouseEnter } onMouseLeave={ this.handleMouseLeave }>
          <div className="LinkIcon">
          <i className="mdi mdi-grey mdi-24">{ icon }</i>
          <LinkIconBubble title={ title } show={ this.state.show } />
          </div>
        </a>
      )
    }
  }
}

LinkIcon.propTypes = propTypes
LinkIcon.defaultProps = defaultProps

export default LinkIcon
