import request from 'superagent'
import { Redirect } from 'react-router-dom'
import { nameStore, bodyStore } from './flux/wikiStores.js'
import EditHeader from './EditHeader.js'
import EditForm from './EditForm.js'
import WikiShow from './WikiShow.js'

export default class WikiEdit extends React.Component {
  constructor (props) {
    super(props)
    const { name } = this.props.match.params
    this.state = {
      name: name,
      body: '',
      jump: ''
    }
    nameStore.onChange = () => {
      this.setState({ name: nameStore.name })
    }
    bodyStore.onChange = () => {
      this.setState({ body: bodyStore.body })
    }
  }
  componentWillMount () {
    if (this.state.name === 'new') {
      this.setState({ name: '' })
      return
    }
    const queryName = this.state.name
    request
      .get(`/api/wiki/get/${queryName}`)
      .end((err,res) => {
        if (err) return
        this.setState({
          body: res.body.data.body,
        })
      })
  }
  save () {
    const saveName = this.state.name
    const saveBody = this.state.body
    request
      .post(`/api/wiki/post/${saveName}`)
      .type('form')
      .send({
        name: saveName,
        body: saveBody
      })
      .end((err,data) => {
        if (err) {
          console.log(err)
          return
        }
        this.setState({ jump: '/wiki' })
      })
  }

  render () {
    if (this.state.jump !== '') {
      return <Redirect to={this.state.jump} />
    }
    const propName = this.state.name
    const propBody = this.state.body
    return (
      <div className="wikiEdit">
        <WikiEditHeader name={propName} />
        <div className="wikiEditor u-flex">
          <WikiEditForm body={propBody} />
          <WikiShow body={propBody} />
        </div>
        <div className="wikiEditFooter">
          <button onClick={() => this.save()}>Save</button>
        </div>
      </div>
    )
  }
}
