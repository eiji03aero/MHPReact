import EditHeader from './EditHeader.js'
import EditForm from './EditForm.js'
import EditShow from './EditShow.js'

// const propTypes = {
// }
//
// const defaultProps = {
// }

const WikiForm = ({ title, body, onTitleChange, onBodyChange, onSave }) => {

  return (
    <div className="wikiEdit">
      <EditHeader title={title}
        onTitleChange={onTitleChange} />
      <div className="wikiEditor u-flex">
        <EditForm body={body}
          onBodyChange={onBodyChange} />
        <EditShow body={body} />
      </div>
      <div className="wikiEditFooter">
        <button onClick={onSave}>Save</button>
      </div>
    </div>
  )
}

// WikiEdit.propTypes = propTypes
// WikiEdit.defaultProps = defaultProps

export default WikiForm
