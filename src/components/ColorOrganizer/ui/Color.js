import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import StarRating from './StarRating.js'
import LinkIcon from '../../common/util/LinkIcon'
import colorActions from '../../../redux/actions/colors.js'

import '../stylesheets/Color.scss'

const propTypes = {
  colorInfo: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired
}

const defaultProps = {
  colorInfo: {},
  onRemove: f => f
}

const mapDispatchToProps = dispatch => ({
  onRemove (id) {
    dispatch(colorActions.removeColor(id))
  }
})

export const Color = ({ colorInfo, onRemove }) => {
  const { color, id, rating, title } = colorInfo
  const showUrl = `/color-organizer/${id}`

  return (
    <div className="color-container">
      <div className="color-header">
        <p className="u-fs--36">{ title }</p>
        <div className='remove-color'>
          <LinkIcon title='Delete' icon='delete' func={() => onRemove(id)} />
      </div>

      </div>
      <Link to={ showUrl }>
        <div className="color-display" style={ { backgroundColor:  color } } />
      </Link>
      <div className="color-description">
        <StarRating id={id}
          rating={rating} />
      </div>
    </div>
  )
}

Color.propTypes = propTypes
Color.defaultProps = defaultProps

export default connect(null, mapDispatchToProps)(Color)
