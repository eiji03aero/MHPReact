import { AddColorForm } from './AddColorForm.js'

import './color-organizer-header.scss'

export const ColorOrganizerHeader = ({ formIsOpen, onClickForm, onAddColor }) => {
  return (
    <div className="color-organizer-header u-flex--fs">
      <input placeholder="search your color"/>
      <div className="u-optional-right">
        <button onClick={() => onClickForm()}>
          Add Color
        </button>
        <AddColorForm
          formIsOpen={formIsOpen}
          onAddColor={(title, color) => onAddColor(title, color) }/>
      </div>
    </div>
  )
}

ColorOrganizerHeader.propTypes = {
  formIsOpen: PropTypes.bool.isRequired,
  onAddColor: PropTypes.func.isRequired
}
