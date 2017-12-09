import { Color } from './color.js'

import './ColorList.scss'

const ColorList = ({ colors, onRate, onRemove }) => {
  if (colors.length <= 0) {
    return <h1 className="no-color"> you aint got no color here!!</h1>
  }
  return (
    <div className="color-list u-flex--item-table">
      { colors.map((color, i) => {
        return (
          <Color
            key={i}
            colorInfo={color}
            onRate={(num, id) => onRate(num, id)}
            onRemove={(id) => onRemove(id)} />
        )
      })}
    </div>
  )
}

ColorList.propTypes = {
  colors: PropTypes.array.isRequired,
  onRate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default ColorList
