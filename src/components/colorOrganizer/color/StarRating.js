import './StarRating.scss'

export const StarRating = ({ id, rating, onRate, totalStars = 5 }) =>
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
    <p className="_fs-20">{rating} / {totalStars}</p>
  </div>

StarRating.propTypes = {
  id: PropTypes.string.isRequired,
  totalStars: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  onRate: PropTypes.func.isRequired
}

StarRating.defaultProps = {
  totalStars: 5
}
