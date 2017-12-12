import convertText from '../parser/convertText.js'

const propTypes = {
  body: PropTypes.string
}

class WikiShow extends React.Component {

  constructor (props) {
    super(props)
    const body = this.props.body
    this.state = {
      body
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      body: nextProps.body
    })
  }

  render () {
    const body = this.state.body
    const html = convertText(body)
    return (
      <div className="wikiShow u-flex--1">
        { html }
      </div>
    )
  }
}

WikiShow.propTypes = {
  body: PropTypes.string.isRequired
}

export default WikiShow
