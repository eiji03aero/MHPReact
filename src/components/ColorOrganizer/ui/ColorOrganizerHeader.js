import { connect } from 'react-redux'
import AddColorForm from './AddColorForm.js'
import { toggleAddColorForm } from '../../../redux/actions/widgets.js'

const propTypes = {
  onClickForm: PropTypes.func.isRequired,
}

const defaultProps = {
  onClickForm: f => f
}

const mapDispatchToProps = dispatch => ({
  onClickForm () {
    dispatch(toggleAddColorForm())
  }
})

export const ColorOrganizerHeader = ({ onClickForm }) =>
  <div className="u-flex--fs" style={ styles.header }>
    <input placeholder="search your color"/>
    <div className="u-optional-right">
      <button onClick={ onClickForm }> Add Color </button>
      <AddColorForm />
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

export default connect(null, mapDispatchToProps)(ColorOrganizerHeader)
