import { Color } from './color.js'

import './colorList.scss'

export const ColorList = ({ colors, starLimit, onRate, onRemove }) => {
  const colorList = colors.map((color, i) => {
    return (
      <Color key={i}
        colorInfo={color}
        starLimit={starLimit}
        onRate={(num, id) => onRate(num, id)}
        onRemove={(id) => onRemove(id)} />
    )
  })
  
  if (colors.length <= 0) {
    return <h1 className="no-color"> you aint got no color here!!</h1>
  }
  return (
    <div className="color-list u-flex--item-table">
      { colorList }
    </div>
  )
}

ColorList.propTypes = {
  colors: PropTypes.array.isRequired,
  starLimit: PropTypes.number.isRequired,
  onRate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
}
