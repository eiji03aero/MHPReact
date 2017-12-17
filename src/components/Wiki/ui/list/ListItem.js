import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeWiki } from '../../../../redux/actions/wikis.js'

import '../../stylesheets/WikiItem.scss'

const propTypes = {
  wiki: PropTypes.object.isRequired
}

const defaultProps = {
  wiki: {}
}

const mapDispatchToProps = dispatch =>
  ({
    onRemove (_id) {
      dispatch(removeWiki(_id))
    }
  })

const ListItem = ({ wiki, onRemove }) => {
  const { title, body, _id } = wiki
  const wikiUrl = `/wiki/${_id}`
  console.log(wikiUrl)

  return (
    <div className="wikiItem u-flex">
      <div className="itemLeft">
        <div className="itemThumbnail _bg_cover" />
      </div>
      <div className="itemMain">
        <Link to={wikiUrl}>
          <div className="itemInfo">
            <h3>{ title }</h3>
            <p>{ body }</p>
          </div>
        </Link>
        <div className="itemOperational">
          <a onClick={() => onRemove(_id)}>del</a>
        </div>
      </div>
    </div>
  )
}

ListItem.propTypes = propTypes
ListItem.defaultProps = defaultProps

export default connect(null, mapDispatchToProps)(ListItem)
