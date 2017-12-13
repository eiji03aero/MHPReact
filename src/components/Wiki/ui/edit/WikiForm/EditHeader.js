const propTypes = {
  title: PropTypes.string,
  onTitleChange: PropTypes.func
}

const EditHeader = ({ title, onTitleChange }) => {

  const handleChange = (e) => {
    onTitleChange(e.target.value)
  }

  return (
    <div className="wikiEditHeader">
      <p>Title</p>
      <input className="editorTitle _fs-36"
        value={title}
        onChange={e => handleChange(e)} />
    </div>
  )
}

EditHeader.propTypes = propTypes

export default EditHeader
