import WikiParser from './parser/wikiParser.js'

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
    const html = this.convertText(body)
    return (
      <div className="wikiShow u-flex--1">
        { html }
      </div>
    )
  }
  convertText (src) {
    const nodes = WikiParser.parse(src)
    const lines = nodes.map((e,i) => {
      if (e.tag === 'ul') {
        const lis = e.items.map(
          (s,j) => <li key={`node${i}_${j}`}>{s}</li>
        )
        return <ul key={`node${i}`}>{lis}</ul>
      }
      if (e.tag === 'a') {
        return (
          <div key={`node${i}`}>
            <a href={`/wiki/${e.label}`}>to {e.label}</a>
          </div>
        )
      }
      return React.createElement(
        e.tag, { key: `node${i}`}, e.label
      )
    })
    return lines
  }
}

WikiShow.propTypes = {
  body: PropTypes.string.isRequired
}

export default WikiShow
