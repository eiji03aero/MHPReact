import { Switch, Route, Link } from 'react-router-dom'
import ColorOrganizerHeader from './header/ColorOrganizerHeader.js'
import ColorList from './color/ColorList.js'
import ColorShow from './color/ColorShow.js'
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
        <Switch>
          <Route path="/color-organizer/:id" component={ ColorShow } />
          <Route component={() => (
            <div>
              <ColorOrganizerHeader
                addColorFormIsOpen={addColorFormIsOpen}
                onClickForm={onClickForm} />
              <ColorList
                colors={colors}
                onRate={onRate}
                onRemove={onRemove} />
            </div>
          )} />
        </Switch>
      </div>
    )
  }
}

ColorOrganizer.contextTypes = {
  store: PropTypes.object
}

export default ColorOrganizer
