import React from 'react'
import ImageBox from './ImageBox.js'

import './imageMapStyles.scss'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isDragging: false,
      current: {},
      boxes: [],
      log: 'here comes log',
      fieldX: '',
      fieldY: '',
      startX: '',
      startY: '',
      endX: '',
      endY: ''
    }
  }
  componentDidMount () {
    const field = this.refs.imageMapField
    this.setState({
      fieldX: field.offsetTop,
      fieldY: field.offsetLeft
    })
  }
  whenMouseDown (e) {
    const sx = e.pageX
    const sy = e.pageY
    this.setState({ startX: sx, startY: sy, isDragging: true })
  }
  whenMouseMove (e) {
    if (!this.state.isDragging) return
    const ex = e.pageX
    const ey = e.pageY
    this.setState({
      endX: ex,
      endY: ey
    })
  }
  whenMouseUp (e) {
    if (!this.state.isDragging) return
    const style = {
      position: "absolute",
      top: this.state.startY,
      left: this.state.startX,
      width: this.state.endX - this.state.startX,
      height: this.state.endY - this.state.startY,
      backgroundColor: "red"
    }
    this.setState({
      isDragging: false,
      current: style
    })
  }
  render () {
    return (
      <div className="imageMap">
        <div className="imageMapField"
          onMouseDown={ (e) => this.whenMouseDown(e) }
          onMouseMove={ (e) => this.whenMouseMove(e) }
          onMouseUp={ (e) => this.whenMouseUp(e) }
          ref="imageMapField"
        >
        { this.renderCurrent() }
        </div>
      </div>
    )
  }
  renderCurrent () {
    if (!this.state.current) return
    return (
      <ImageBox style={this.state.current} />
    )
  }
}
