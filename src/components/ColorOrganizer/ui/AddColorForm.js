import { connect } from 'react-redux'
import { addColor } from '../../../redux/actions/colors.js'
import { toggleAddColorForm } from '../../../redux/actions/widgets.js'

import '../stylesheets/AddColorForm.scss'

const propTypes = {
  addColorFormIsOpen: PropTypes.bool.isRequired,
  onAdd: PropTypes.func.isRequired
}

const defaultProps = {
  addColorFormIsOpen: false,
  onAdd: f => f
}

const mapStateToProps = state => ({
  addColorFormIsOpen: state.widgets.addColorFormIsOpen
})

const mapDispatchToProps = dispatch => ({
  onAdd (title, color) {
    dispatch(addColor(title, color))
    dispatch(toggleAddColorForm('close'))
  }
})

const AddColorForm = ({ addColorFormIsOpen, onAdd }) => {
  let _title, _color
  const formClass = addColorFormIsOpen ? 'add-color-form active' : 'add-color-form'

  const onSubmit = () => {
    const title = _title.value
    const color = _color.value
    onAdd(title, color)
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
      <button className="c-button--secondary" onClick={onSubmit}>Submit</button>
    </div>
  )
}

AddColorForm.propTypes = propTypes
AddColorForm.defaultProps = defaultProps

export default connect(mapStateToProps, mapDispatchToProps)(AddColorForm)
