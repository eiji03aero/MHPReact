import { Link } from 'react-router-dom'

const propTypes = {
  wiki: PropTypes.object.isRequired
}

const defaultProps = {
  wiki: {}
}

const ListItem = ({ wiki }) => {
  const { title, body, id } = wiki
  const wikiUrl = `/wiki/${id}`

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
          <Link to={`/wiki/edit/${id}`}>edit</Link>
          <a href="#">del</a>
        </div>
      </div>
    </div>
  )
}

ListItem.propTypes = propTypes
ListItem.defaultProps = defaultProps

export default ListItem
