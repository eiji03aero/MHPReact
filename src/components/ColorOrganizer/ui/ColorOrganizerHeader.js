import AddColorForm from './AddColorForm.js'

const ColorOrganizerHeader = ({ addColorFormIsOpen, onClickForm, onAdd }) =>
  <div className="u-flex--fs" style={ styles.header }>
    <input placeholder="search your color"/>
    <div className="u-optional-right">
      <button onClick={ onClickForm }> Add Color </button>
      <AddColorForm
        addColorFormIsOpen={ addColorFormIsOpen }
        onAdd={ onAdd } />
    </div>
  </div>

const styles = {}

styles.header = {
  padding: '.5rem 2rem',
  backgroundColor: '#fafafa'
}

ColorOrganizerHeader.propTypes = {
  onClickForm: PropTypes.func.isRequired
}

export default ColorOrganizerHeader
