import './color-organizer-header.scss'

export const ColorOrganizerHeader = (props) => {
  return (
    <div className="color-organizer-header u-flex--fs">
      <input placeholder="search your color"/>
      <div className="u-optional-right">
        <button>Add Color</button>
      </div>
    </div>
  )
}
