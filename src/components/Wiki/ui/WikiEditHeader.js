import React from 'react'
import { Actions } from './flux/wikiActions.js'

class WikiEditHeader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: this.props.name
    }
  }
  componentWillReceiveProps (nextProps) {
    this.setState({
      name: nextProps.name
    })
  }
  handleChange (e) {
    Actions.changeName(e.target.value)
  }
  render () {
    return (
      <div className="wikiEditHeader">
        <p>Title</p>
        <input className="editorTitle _fs-36"
          value={this.state.name}
          onChange={e => this.handleChange(e)} />
      </div>
    )
  }
}

WikiEditHeader.propTypes = {
  name: PropTypes.string.isRequired
}
