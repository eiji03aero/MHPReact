import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import '../../stylesheets/WikiItem.scss'

const propTypes = {
  wiki: PropTypes.object.isRequired
}

const defaultProps = {
  wiki: {}
}

const ListItem = ({ wiki }) => {
  const { title, body, _id } = wiki
  const wikiUrl = `/wiki/show/${_id}`

  return (
    <Link to={ wikiUrl }>
      <div className="wikiItem u-flex">
        <div className="itemLeft">
          <div className="itemThumbnail _bg_cover" />
        </div>
        <div className="itemMain">
          <div className="itemInfo">
            <h3>{ title }</h3>
            <p>{ body }</p>
          </div>
          <div className="itemOperational">
          </div>
        </div>
      </div>
    </Link>
  )
}

ListItem.propTypes = propTypes
ListItem.defaultProps = defaultProps

export default connect(null, null)(ListItem)
