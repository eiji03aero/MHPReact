import React from 'react'
import request from 'superagent'
import { Redirect } from 'react-router-dom'
import { nameStore, bodyStore } from './flux/wikiStores.js'
import WikiEditForm from './WikiEditForm.js'
import { WikiShow } from './WikiShow.js'

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
    request
      .get(`/api/wiki/get/${this.state.name}`)
      .end((err,res) => {
        if (err) return
        this.setState({
          body: res.body.data.body,
        })
      })
  }
  save () {
    const wikiname = this.state.name
    const body = this.state.body
    request
      .post(`/api/wiki/post/${wikiname}`)
      .type('form')
      .send({
        name: wikiname,
        body: body
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
    return (
      <div className="wikiEdit">
        <div className="wikiEditor _flx">
          <WikiEditForm
            name={this.state.name}
            body={this.state.body} />
          <WikiShow
            name={this.state.name}
            body={this.state.body} />
        </div>
        <div className="wikiEditFooter">
          <button onClick={() => this.save()}>Save</button>
        </div>
      </div>
    )
  }
}
