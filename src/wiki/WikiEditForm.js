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
    request
      .get(`/api/get/${this.state.name}`)
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
    request
      .post(`/api/put/${wikiname}`)
      .type('form')
      .send({
        name: wikiname,
        body: this.state.body
      })
      .end((err,data) => {
        if (err) {
          console.log(err)
          return
        }
        this.setState({ jump: `/wiki/${wikiname}` })
      })
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
    const name = this.state.name
    return (
      <div className="wikiEditForm _flx-1">
        <h1><a href={`/wiki/${name}`}>{name}</a></h1>
        <textarea rows={12} cols={60}
          onChange={e => this.bodyChanged(e)}
          value={this.state.body}
        /><br />
        <button onClick={e => this.save()}>Save</button>
      </div>
    )
  }
}
