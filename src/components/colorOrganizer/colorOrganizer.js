import React from 'react'
import { ColorOrganizerHeader } from './header/color-organizer-header.js'
import { ColorList } from './color/color-list.js'

import './colorOrganizer.scss'

export default class ColorOrganizer extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      colors: [
        { 
          color: { backgroundColor: '#004080' },
          title: "favorite blue",
          starSelected: 3,
          id: "2345"
        }
      ],
      starLimit: 5
    }
    this.onRate = this.onRate.bind(this)
    this.onRemove = this.onRemove.bind(this)
  }

  onRate (num, id) {
    const msg = `you rated! num: ${num}, id: ${id}`
    window.alert(msg)
  }

  onRemove (id) {
    const msg = `you tried to remove but you cant!! id: ${id}`
    window.alert(msg)
  }

  render () {
    const { onRate, onRemove } = this
    const { colors, starLimit } = this.state

    return (
      <div className="color-organizer-container">
        <ColorOrganizerHeader />
        <ColorList colors={colors}
          starLimit={starLimit}
          onRate={onRate}
          onRemove={onRemove} />
      </div>
    )
  }
}
