import { connect } from 'react-redux'
import ColorOrganizerHeader from './ui/ColorOrganizerHeader.js'
import ColorList from './ui/ColorList.js'
import ColorShow from './ui/ColorShow.js'
import AddColorForm from './ui/AddColorForm.js'
import { addColor, rateColor, removeColor } from '../../redux/actions/colors.js'
import { toggleAddColorForm } from '../../redux/actions/widgets.js'

export const Header = connect(
  state =>
    ({
      addColorFormIsOpen: state.widgets.addColorFormIsOpen
    }),
  dispatch =>
    ({
      onClickForm () {
        dispatch(toggleAddColorForm())
      },
      onAdd (title, color) {
        dispatch(addColor(title, color))
        dispatch(toggleAddColorForm('close'))
      }
    })
)(ColorOrganizerHeader)

export const List = connect(
  state =>
    ({
      colors: state.colors
    }),
  dispatch =>
    ({
      onRate (rating, id) {
        dispatch(rateColor(rating, id))
      },
      onRemove (id) {
        dispatch(removeColor(id))
      }
    })
)(ColorList)

export const Show = connect(
  null,
  null
)(ColorShow)
