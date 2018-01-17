import { connect } from 'react-redux'
import WikiForm from '../WikiForm'
import wikiActions from '../../../../redux/actions/wikis.js'
import appActions from '../../../../redux/actions/app.js'

const mapStateToProps = ({ wikis }, { match }) =>
  ({
    wiki: wikis.filter(x => x._id === match.params._id)[0]
  })

const mapDispatchToProps = dispatch =>
  ({
    onSave (_id, title, body) {
      dispatch(wikiActions.updateWiki({ _id, title, body }))
      dispatch(appActions.redirectApp('/wiki'))
    }
  })

class EditWiki extends React.Component {
  constructor (props) {
    super(props)
    const { _id, title, body } = this.props.wiki
    this.state = {
      _id,
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
    const { _id, title, body } = this.state
    this.props.onSave(_id, title, body)
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
