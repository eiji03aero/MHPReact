import { StarRating } from './StarRating.js'

import './color.scss'

export const Color = ({ colorInfo, onRate, onRemove }) => {
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
          rating={rating}
          onRate={(num, id) => onRate(num, id)} />
      </div>
    </div>
  )
}

Color.propTypes = {
  colorInfo: PropTypes.object.isRequired,
  onRate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}
