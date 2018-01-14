import { connect } from 'react-redux'
import actions from '../../../redux/actions/colors.js'

import '../stylesheets/StarRating.scss'

const propTypes = {
  id: PropTypes.string.isRequired,
  totalStars: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  onRate: PropTypes.func.isRequired
}

const defaultProps = {
  onRate: f => f,
  totalStars: 5
}

const mapDispatchToProps = dispatch => ({
  onRate (rating, id) {
    dispatch(actions.rateColor(rating, id))
  }
})

export const StarRating = ({ id, rating, onRate, totalStars }) =>
  <div className="star-rating-container">
    <div className="star-rating">
      { [...new Array(totalStars)].map((star, i) => {
        const starIdx = i + 1
        const starClass = starIdx <= rating ? "star selected" : "star"
        return (
          <div className={starClass}
            key={i}
            onClick={() => onRate(starIdx, id)} />
        )
      }) }
    </div>
    <p className="u-fs--20">{rating} / {totalStars}</p>
  </div>

StarRating.propTypes = propTypes
StarRating.defaultProps = defaultProps

export default connect(null, mapDispatchToProps)(StarRating)
