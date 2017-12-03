import { Color } from './color.js'

export const ColorList = ({ colors, starLimit, onRate, onRemove }) => {
  return (
    <div className="color-list u-flex--item-table">
      { colors.map((color, i) => {
          <Color key={i}
            colorInfo={color}
            starLimit={starLimit}
            onRate={() => onRate()}
            onRemove={() => onRemove()} />
        })
      }
    </div>
  )
}
