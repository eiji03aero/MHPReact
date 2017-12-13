import { connect } from 'react-redux'
import WikiForm from './WikiForm/WikiForm.js'
import { updateWiki } from '../../../../redux/actions/wikis.js'
import { redirectApp } from '../../../../redux/actions/app.js'

const mapStateToProps = ({ wikis }, { match }) =>
  ({
    wiki: wikis.filter(x => x.id === match.params.id)[0]
  })

const mapDispatchToProps = dispatch =>
  ({
    onSave (id, title, body) {
      dispatch(updateWiki(id, title, body))
      dispatch(redirectApp('/wiki'))
    }
  })

class EditWiki extends React.Component {
  constructor (props) {
    super(props)
    const { id, title, body } = this.props.wiki
    this.state = {
      id,
      title,
      body
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
    const { id, title, body } = this.state
    this.props.onSave(id, title, body)
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

export default connect(mapStateToProps, mapDispatchToProps)(EditWiki)
