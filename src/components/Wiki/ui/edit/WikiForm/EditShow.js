import convertText from '../../../parser/convertText.js'

const propTypes = {
  body: PropTypes.string
}

const EditShow = ({ body }) => {

  const html = convertText(body)

  return (
    <div className="wikiShow u-flex--1">
      { html }
    </div>
  )
}

EditShow.propTypes = propTypes

export default EditShow
