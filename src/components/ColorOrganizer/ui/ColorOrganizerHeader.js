import { connect } from 'react-redux'
import AddColorForm from './AddColorForm.js'
import { addColor } from '../../../redux/actions/colors.js'
import { toggleAddColorForm } from '../../../redux/actions/widgets.js'

const propTypes = {
  addColorFormIsOpen: PropTypes.bool.isRequired,
  onClickForm: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired
}

const defaultProps = {
  addColorFormIsOpen: false,
  onClickForm: f => f,
  onAdd: f => f
}

const mapStateToProps = state => ({
  addColorFormIsOpen: state.widgets.addColorFormIsOpen
})

const mapDispatchToProps = dispatch => ({
  onClickForm () {
    dispatch(toggleAddColorForm())
  },
  onAdd (title, color) {
    dispatch(addColor(title, color))
    dispatch(toggleAddColorForm('close'))
    }
})

export const ColorOrganizerHeader = ({ addColorFormIsOpen, onClickForm, onAdd }) =>
  <div className="u-flex--fs" style={ styles.header }>
    <input placeholder="search your color"/>
    <div className="u-optional-right">
      <button onClick={ onClickForm }> Add Color </button>
      <AddColorForm
        addColorFormIsOpen={ addColorFormIsOpen }
        onAdd={ onAdd } />
    </div>
  </div>

const styles = {
  header: {
    padding: '.5rem 2rem',
    backgroundColor: '#fafafa'
  }
}

ColorOrganizerHeader.propTypes = propTypes
ColorOrganizerHeader.defaultProps = defaultProps

export default connect(mapStateToProps, mapDispatchToProps)(ColorOrganizerHeader)
