import '../stylesheets/AddColorForm.scss'

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
      <button onClick={onSubmit}>Submit</button>
    </div>
  )
}

AddColorForm.propTypes = {
  addColorFormIsOpen: PropTypes.bool.isRequired,
  onAdd: PropTypes.func.isRequired
}

AddColorForm.defaultProps = {
  addColorFormIsOpen: false,
  onAdd: f => f
}

export default AddColorForm
