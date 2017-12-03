import './StarRating.scss'

export const StarRating = ({ id, starLimit, starSelected, onRate }) => {
  return (
    <div className="star-rating-container">
      <div className="star-rating">
        { [...new Array(starLimit)].map((star, i) => {
          const starIdx = i + 1
          const starClass = starIdx <= starSelected ? "star selected" : "star"
          return (
            <div className={starClass}
              key={i}
              onClick={() => onRate(starIdx, id)} />
          )
        }) }
      </div>
      <p className="_fs-20">{starSelected} / {starLimit}</p>
    </div>
  )
}
