import React from 'react'

export default class ImageBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isClicked: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.setState({ isClicked: !this.state.isClicked })
  }
  render () {
    return (
      <div className="imageBox"
        style={ this.props.style }
        onClick={ this.handleClick }>
        { this.renderDel() }
        { this.renderEdi() }
      </div>
    )
  }
  renderDel () {
    if (!this.state.isClicked) return
    return (
      <div className="del">
        del
      </div>
    )
  }
  renderEdi () {
    if(!this.state.isClicked) return
    return (
      <div className="edi">
        edi
      </div>
    )
  }
}
