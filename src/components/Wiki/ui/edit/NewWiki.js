import { connect } from 'react-redux'
import WikiForm from './WikiForm/WikiForm.js'
import { createWiki } from '../../../../redux/actions/wikis.js'
import { redirectApp } from '../../../../redux/actions/app.js'

const mapDispatchToProps = dispatch =>
  ({
    onSave (title, body) {
      dispatch(createWiki(title, body))
      dispatch(redirectApp('/wiki'))
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
    const { onTitleChange } = this
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
