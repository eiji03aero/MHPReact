import { connect } from 'react-redux'
import WikiForm from '../WikiForm'
import wikiActions from '../../../../redux/actions/wikis.js'
import appActions from '../../../../redux/actions/app.js'

const mapDispatchToProps = dispatch =>
  ({
    onSave (title, body) {
      dispatch(wikiActions.createWiki({ title, body }))
      dispatch(appActions.redirectApp('/wiki'))
    }
  })

class NewWiki extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
    this.onTitleChange = this.onTitleChange.bind(this)
    this.onBodyChange = this.onBodyChange.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  onTitleChange (title) {
    this.setState({ title })
  }

  onBodyChange (body) {
    this.setState({ body })
  }

  onSave () {
    const { title, body } = this.state
    this.props.onSave(title, body)
  }

  render () {
    const { title, body } = this.state
    return (
      <WikiForm title={title}
        body={body}
        onTitleChange={this.onTitleChange}
        onBodyChange={this.onBodyChange}
        onSave={this.onSave} />
    )
  }
}

export default connect(null, mapDispatchToProps)(NewWiki)
