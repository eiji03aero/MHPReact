import Color from './Color.js'

const ColorList = ({ colors, onRate, onRemove }) => {
  return colors.length <= 0 ?
    <h1 style={ styles.noColor}> you aint got no color here!!</h1> :
    <div className="u-flex--item-table" style={ styles.colorList }>
      { colors.map((color, i) => {
        return (
          <Color
            key={i}
            colorInfo={color}
            onRate={onRate}
            onRemove={onRemove} />
        )
      })}
    </div>
}

const styles = {
  colorList: {
    margin: '2rem'
  },
  noColor: {
    textAlign: 'center'
  }
}

ColorList.propTypes = {
  colors: PropTypes.array.isRequired,
  onRate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
}

ColorList.defaultProps = {
  colors: [],
  onRate: f => f,
  onRemove: f => f
}

export default ColorList
