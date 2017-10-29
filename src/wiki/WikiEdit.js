import React from 'react'
import request from 'superagent'
import WikiEditForm from './WikiEditForm.js'
import { WikiShow } from './WikiShow.js'
import { nameStore, bodyStore } from './flux/wikiStores.js'

export default class WikiEdit extends React.Component {
  constructor (props) {
    super(props)
    const { name } = this.props.match.params
    this.state = {
      name: name,
      body: ''
    }
    nameStore.onChange = () => {
      this.setState({ name: nameStore.name })
    }
    bodyStore.onChange = () => {
      this.setState({ body: bodyStore.body })
    }
  }
  render () {
    return (
      <div className="wikiEdit _flx">
        <WikiEditForm
          name={this.state.name}
          body={this.state.body} />
        <WikiShow
          name={this.state.name}
          body={this.state.body} />
      </div>
    )
  }
}
