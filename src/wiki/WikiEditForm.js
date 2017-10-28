import React from 'react'
import request from 'superagent'
import { Redirect } from 'react-router-dom'

export default class WikiEditForm extends React.Component {
  constructor (props) {
    super(props)
    const name = this.props.name
    this.state = {
      name, body: '', loaded: false, jump: ''
    }
  }
  componentWillMount () {
    if (this.state.name === 'new') {
      this.setState({
        loaded: true
      })
      return
    }
    request
      .get(`/api/wiki/get/${this.state.name}`)
      .end((err,res) => {
        if (err) return
        this.setState({
          body: res.body.data.body,
          loaded: true
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
          console.log(err, 'could not find it')
          return
        }
        console.log(data)
      })
  }
  nameChanged (e) {
    this.setState({ name: e.target.value })
  }
  bodyChanged (e) {
    this.setState({ body: e.target.value })
  }
  render () {
    if (!this.state.loaded) {
      return (
        <div className="wikiEditForm _flx-1">
          <p>loading...</p>
        </div>
      )
    }
    if (this.state.jump !== '') {
      return <Redirect to={this.state.jump} />
    }
    return (
      <div className="wikiEditForm _flx-1">
        <input type="text" value={this.state.name} onChange={e => this.nameChanged(e)}/><br />
        <textarea rows={12} cols={60}
          onChange={e => this.bodyChanged(e)}
          value={this.state.body}
        /><br />
        <button onClick={e => this.save()}>Save</button>
      </div>
    )
  }
}
