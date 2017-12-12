const EditForm = ({ body, onChange }) => {

  const onBodyChange = () => {
    onChange(body)
  }

  return (
    <div className="wikiEditForm u-flex--1">
      <textarea className="editorTextarea _nobdr _fs-16"
        rows={12} cols={60}
        value={ body }
        onChange={() => onBodyChange(body)} /><br />
    </div>
  )
}

export default EditForm
