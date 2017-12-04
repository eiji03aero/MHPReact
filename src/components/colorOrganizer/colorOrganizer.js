import uuidv4 from 'uuid/v4'
import { ColorOrganizerHeader } from './header/color-organizer-header.js'
import { ColorList } from './color/colorList.js'

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
        },
        { 
          color: { backgroundColor: '#eee' },
          title: "geeky grey",
          starSelected: 5,
          id: "2347"
        },
        { 
          color: { backgroundColor: '#0096ce' },
          title: "great blue",
          starSelected: 5,
          id: "2348"
        }
      ],
      formIsOpen: false
    }
    this.onAddColor = this.onAddColor.bind(this)
    this.onClickForm = this.onClickForm.bind(this)
    this.onRate = this.onRate.bind(this)
    this.onRemove = this.onRemove.bind(this)
  }

  onAddColor(title, color) {
    const newColor = {
      color: { backgroundColor: color },
      title: title,
      starSelected: 0,
      id: uuidv4()
    }
    const newColors = [
      ...this.state.colors,
      newColor
    ]
    this.setState({
      colors: newColors,
      formIsOpen: false
    })
  }

  onClickForm () {
    const current = this.state.formIsOpen
    this.setState({ formIsOpen: !current })
  }

  onRate (num, id) {
    const { colors } = this.state
    const newColors = colors.map((color) => {
      if (color.id === id) {
        color.starSelected = num
      }
      return color
    })
    this.setState({
      colors: newColors
    })
  }

  onRemove (id) {
    const { colors } = this.state
    const newColors = colors.filter(color => {
      return color.id !== id
    })
    this.setState({ colors: newColors })
  }

  render () {
    const { onAddColor, onClickForm, onRate, onRemove } = this
    const { colors, formIsOpen } = this.state

    return (
      <div className="color-organizer-container">
        <ColorOrganizerHeader
          formIsOpen={formIsOpen}
          onClickForm={onClickForm}
          onAddColor={onAddColor} />
        <ColorList
          colors={colors}
          onRate={onRate}
          onRemove={onRemove} />
      </div>
    )
  }
}
