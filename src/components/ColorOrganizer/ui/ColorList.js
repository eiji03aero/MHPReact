import { connect } from 'react-redux'
import Color from './Color.js'
import { rateColor, removeColor } from '../../../redux/actions/colors.js'

const propTypes = {
  colors: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
}

const defaultProps = {
  colors: [],
  onRemove: f => f
}

const mapStateToProps = state => ({
  colors: state.colors
})

const mapDispatchToProps = dispatch => ({
  onRemove (id) {
    dispatch(removeColor(id))
  }
})

export const ColorList = ({ colors, onRemove }) => {
  return colors.length <= 0 ?
    <h1 style={ styles.noColor}> you aint got no color here!!</h1> :
    <div className="u-flex--item-table" style={ styles.colorList }>
      { colors.map((color, i) => {
        return (
          <Color
            key={i}
            colorInfo={color}
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

ColorList.propTypes = propTypes
ColorList.defaultProps = defaultProps

export default connect(mapStateToProps, mapDispatchToProps)(ColorList)
