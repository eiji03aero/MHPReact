import { addColor } from '../../../redux/actions/colors.js'
import { closeAddColorForm } from '../../../redux/actions/widgets.js'
import './AddColorForm.scss'

export const AddColorForm = ({ addColorFormIsOpen }, { store }) => {

  let _title, _color
  const formClass = addColorFormIsOpen ? 'add-color-form active' : 'add-color-form'

  const onSubmit = () => {
    const title = _title.value
    const color = _color.value
    if (color && title) {
      store.dispatch(addColor(title, color))
      store.dispatch(closeAddColorForm())
    }
    _title.value = ''
    _color.value = '#000000'
  }

  return (
    <div className={ formClass }>
      <p>Add your new color</p>
      <p>
        <span>Title: </span>
        <input
          type='text'
          ref={(input) => _title = input} />
      </p>
      <p>
        <span>Color: </span>
        <input
          type='color'
          ref={(input) => _color = input} />
      </p>
      <button onClick={onSubmit}>Submit</button>
    </div>
  )
}

AddColorForm.propTypes = {
  addColorFormIsOpen: PropTypes.bool.isRequired,
}

AddColorForm.contextTypes = {
  store: PropTypes.object
}
