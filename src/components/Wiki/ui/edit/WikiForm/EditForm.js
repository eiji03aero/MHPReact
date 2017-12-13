const EditForm = ({ body, onBodyChange }) => {

  const handleChange = (e) => {
    onBodyChange(e.target.value)
  }

  return (
    <div className="wikiEditForm u-flex--1">
      <textarea className="editorTextarea _nobdr _fs-16"
        rows={12} cols={60}
        value={body}
        onChange={(e) => handleChange(e)} /><br />
    </div>
  )
}

export default EditForm
