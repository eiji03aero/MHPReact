import { connect } from 'react-redux'
import Color from './Color.js'

const propTypes = {
  colors: PropTypes.array.isRequired,
}

const defaultProps = {
  colors: [],
}

const mapStateToProps = state => ({
  colors: state.colors
})

export const ColorList = ({ colors }) => {
  return colors.length <= 0 ?
    <h1 style={ styles.noColor}> you aint got no color here!!</h1> :
    <div className="u-flex--item-table u-flex--1" style={ styles.colorList }>
      { colors.map((color, i) => {
        return (
          <Color
            key={i}
            colorInfo={color} />
        )
      })}
    </div>
}

const styles = {
  colorList: {
    padding: '2rem'
  },
  noColor: {
    textAlign: 'center'
  }
}

ColorList.propTypes = propTypes
ColorList.defaultProps = defaultProps

export default connect(mapStateToProps, null)(ColorList)
