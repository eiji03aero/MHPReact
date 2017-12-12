const propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func
}
const EditHeader = ({ title, onChange }) => {

  const handleChange () => {
    onChange(title)
  }

  return (
    <div className="wikiEditHeader">
      <p>Title</p>
      <input className="editorTitle _fs-36"
        value={title}
        onChange={() => handleChange()} />
    </div>
  )
}

EditHeader.propTypes = propTypes

export default EditHeader
