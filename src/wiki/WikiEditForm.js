import React from 'react'
import { Actions } from './flux/wikiActions.js'

export default class WikiEditForm extends React.Component {
  constructor (props) {
    super(props)
    const name = this.props.name
    const body = this.props.body
    this.state = {
      name: name,
      body: body,
    }
  }
  nameChanged (e) {
    Actions.changeName(e.target.value)
  }
  bodyChanged (e) {
    Actions.changeBody(e.target.value)
  }
  componentWillReceiveProps (nextProps) {
    this.setState({
      name: nextProps.name,
      body: nextProps.body
    })
  }
  render () {
    return (
      <div className="wikiEditForm _flx-1">
        <input type="text" 
          value={this.state.name}
          onChange={e => this.nameChanged(e)} /><br />
        <textarea rows={12} cols={60}
          value={this.state.body}
          onChange={e => this.bodyChanged(e)} /><br />
      </div>
    )
  }
}
