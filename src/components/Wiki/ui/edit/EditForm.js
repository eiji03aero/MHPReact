import { Actions } from './flux/wikiActions.js'

class WikiEditForm extends React.Component {
  constructor (props) {
    super(props)
    const body = this.props.body
    this.state = {
      name: name,
      body: body,
    }
  }
  bodyChanged (e) {
    Actions.changeBody(e.target.value)
  }
  componentWillReceiveProps (nextProps) {
    this.setState({
      body: nextProps.body
    })
  }
  render () {
    return (
      <div className="wikiEditForm u-flex--1">
        <textarea className="editorTextarea _nobdr _fs-16"
          rows={12} cols={60}
          value={this.state.body}
          onChange={e => this.bodyChanged(e)} /><br />
      </div>
    )
  }
}

WikiEditForm.propTypes = {
  body: PropTypes.string.isRequired
}

export default WikiEditForm
