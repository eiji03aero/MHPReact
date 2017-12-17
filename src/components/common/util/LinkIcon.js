import { Link } from 'react-router-dom'

import './stylesheets/LinkIcon.scss'

const propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  to: PropTypes.string,
  func: PropTypes.func,
  size: PropTypes.string,
}

const defaultProps = {
  to: 'dummy',
  icon: 'link',
  func: f => f,
  size: 'small'
}

class LinkIcon extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false
    }
    this.onHover = this.onHover.bind(this)
  }

  onHover () {
    this.setState({
      show: !this.state.show
    })
  }

  render () {
    const { title, icon, to, func, size } = this.props
    if (to !== 'dummy') {
      return (
        <Link to={ to } onMouseEnter={ this.onHover } onMouseLeave={ this.onHover }>
          <div className="LinkIcon">
          <i className="mdi mdi-grey mdi-24">{ icon }</i>
          { this.renderBubble(title) }
          </div>
        </Link>
      )
    } else {
      return (
        <a onClick={ func } onMouseEnter={ this.onHover } onMouseLeave={ this.onHover }>
          <div className="LinkIcon">
          <i className="mdi mdi-grey mdi-24">{ icon }</i>
          { this.renderBubble(title) }
          </div>
        </a>
      )
    }
  }
  renderBubble (title) {
    if (this.state.show) {
      return (
        <div className="icon-bubble-container">
          <div className="icon-bubble-title">
            <span>{ title }</span>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

LinkIcon.propTypes = propTypes
LinkIcon.defaultProps = defaultProps

export default LinkIcon
