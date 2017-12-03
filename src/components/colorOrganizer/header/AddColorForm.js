import './AddColorForm.scss'

export const AddColorForm = ({ formIsOpen, onAddColor }) => {
  let _title, _color
  const formClass = formIsOpen ? 'add-color-form active' : 'add-color-form'

  const onSubmit = () => {
    const title = _title.value
    const color = _color.value
    if (color && title) {
      onAddColor(title, color)
    }
    _title.value = ''
    _color.value = ''
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
  formIsOpen: PropTypes.bool.isRequired,
  onAddColor: PropTypes.func.isRequired
}
