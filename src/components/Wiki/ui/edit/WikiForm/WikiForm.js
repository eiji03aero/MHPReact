import EditHeader from './EditHeader.js'
import EditForm from './EditForm.js'
import EditShow from './EditShow.js'

const propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  onTitleChange: PropTypes.func,
  onBodyChange: PropTypes.func,
  onSave: PropTypes.func,
}

const defaultProps = {
  onTitleChange: f => f,
  onBodyChange: f => f,
  onSave: f => f,
}

const WikiForm = ({ title, body, onTitleChange, onBodyChange, onSave }) =>
  <div className="wikiEdit">
    <EditHeader title={title}
      onTitleChange={onTitleChange} />
    <div className="wikiEditor u-flex">
      <EditForm body={body}
        onBodyChange={onBodyChange} />
      <EditShow body={body} />
    </div>
    <div className="wikiEditFooter">
      <button className="c-button--primary" onClick={onSave}>Save</button>
    </div>
  </div>

WikiForm.propTypes = propTypes
WikiForm.defaultProps = defaultProps

export default WikiForm
