import { AddColorForm } from './AddColorForm.js'

import './ColorOrganizerHeader.scss'

const ColorOrganizerHeader = ({ addColorFormIsOpen, onClickForm }) =>
  <div className="color-organizer-header u-flex--fs">
    <input placeholder="search your color"/>
    <div className="u-optional-right">
      <button onClick={() => onClickForm()}> Add Color </button>
      <AddColorForm addColorFormIsOpen={addColorFormIsOpen} />
    </div>
  </div>

ColorOrganizerHeader.propTypes = {
  addColorFormIsOpen: PropTypes.bool.isRequired,
  onClickForm: PropTypes.func.isRequired
}

export default ColorOrganizerHeader
