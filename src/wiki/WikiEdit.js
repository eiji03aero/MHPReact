import React from 'react'
import request from 'superagent'
import WikiEditForm from './WikiEditForm.js'
import WikiShow from './WikiShow.js'

export default class WikiEdit extends React.Component {
  constructor (props) {
    super(props)
    const name = this.props.name
    this.state = {
      name
    }
  }
  render () {
    return (
      <div className="wikiEdit _flx">
        <WikiEditForm name={this.state.name}/>
        <WikiShow />
      </div>
    )
  }
}
