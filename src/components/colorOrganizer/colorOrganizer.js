import { ColorOrganizerHeader } from './header/ColorOrganizerHeader.js'
import { ColorList } from './color/colorList.js'
import { addColor, rateColor, removeColor } from '../../redux/actions/colors.js'
import { openAddColorForm } from '../../redux/actions/widgets.js'

import './ColorOrganizer.scss'

class ColorOrganizer extends React.Component {

  constructor (props) {
    super(props)
    this.onClickForm = this.onClickForm.bind(this)
    this.onRate = this.onRate.bind(this)
    this.onRemove = this.onRemove.bind(this)
  }

  onClickForm () {
    const formState = this.context.store.getState().widgets.addColorFormIsOpen
    this.context.store.dispatch(openAddColorForm())
  }

  onRate (num, id) {
    this.context.store.dispatch(rateColor(id, num))
  }

  onRemove (id) {
    this.context.store.dispatch(removeColor(id))
  }

  render () {
    const { onClickForm, onRate, onRemove } = this
    const { colors, widgets } = this.context.store.getState()
    const { addColorFormIsOpen } = widgets

    return (
      <div className="color-organizer-container">
        <ColorOrganizerHeader
          formIsOpen={addColorFormIsOpen}
          onClickForm={onClickForm} />
        <ColorList
          colors={colors}
          onRate={onRate}
          onRemove={onRemove} />
      </div>
    )
  }
}

ColorOrganizer.contextTypes = {
  store: PropTypes.object
}

export default ColorOrganizer
