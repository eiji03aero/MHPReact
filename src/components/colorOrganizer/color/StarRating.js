import './StarRating.scss'

export const StarRating = ({ id, starSelected, onRate, totalStars = 5 }) =>
  <div className="star-rating-container">
    <div className="star-rating">
      { [...new Array(totalStars)].map((star, i) => {
        const starIdx = i + 1
        const starClass = starIdx <= starSelected ? "star selected" : "star"
        return (
          <div className={starClass}
            key={i}
            onClick={() => onRate(starIdx, id)} />
        )
      }) }
    </div>
    <p className="_fs-20">{starSelected} / {totalStars}</p>
  </div>

StarRating.propTypes = {
  id: PropTypes.string.isRequired,
  totalStars: PropTypes.number.isRequired,
  starSelected: PropTypes.number.isRequired,
  onRate: PropTypes.func.isRequired
}

StarRating.defaultProps = {
  totalStars: 5
}
