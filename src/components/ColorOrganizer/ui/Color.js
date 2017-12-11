import StarRating from './StarRating.js'

import '../stylesheets/Color.scss'

const propTypes = {
  colorInfo: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired
}

const defaultProps = {
  colorInfo: {},
  onRemove: f => f
}

const Color = ({ colorInfo, onRemove }) => {
  const { color, id, rating, title } = colorInfo

  return (
    <div className="color-container">
      <div className="color-header">
        <p className="_fs-36">{ title }</p>
        <button className="remove-color" onClick={() => onRemove(id)} >
          X
        </button>
      </div>
      <div className="color-display" style={ { backgroundColor:  color } } />
      <div className="color-description">
        <StarRating id={id}
          rating={rating} />
      </div>
    </div>
  )
}

Color.propTypes = propTypes
Color.defaultProps = defaultProps

export default Color
