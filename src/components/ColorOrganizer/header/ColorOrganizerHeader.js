import { AddColorForm } from './AddColorForm.js'

import './ColorOrganizerHeader.scss'

export const ColorOrganizerHeader = ({ formIsOpen, onClickForm }) => {
  return (
    <div className="color-organizer-header u-flex--fs">
      <input placeholder="search your color"/>
      <div className="u-optional-right">
        <button onClick={() => onClickForm()}>
          Add Color
        </button>
        <AddColorForm formIsOpen={formIsOpen} />
      </div>
    </div>
  )
}

ColorOrganizerHeader.propTypes = {
  formIsOpen: PropTypes.bool.isRequired,
  onClickForm: PropTypes.func.isRequired
}
