import { Link } from 'react-router-dom'

const propTypes = {
  wiki: PropTypes.object.isRequired
}

const defaultProps = {
  wiki: {}
}

const WikiItem = ({ wiki }) => {
  const { name, body } = wiki

  return (
    <div className="wikiItem u-flex">
      <div className="itemLeft">
        <div className="itemThumbnail _bg_cover" />
      </div>
      <div className="itemMain">
        <div className="itemInfo">
          <h3>{ name }</h3>
          <p>{ body }</p>
        </div>
        <div className="itemOperational">
          <Link to={`/wiki/edit/${name}`}>edit</Link>
          <a href="#">del</a>
        </div>
      </div>
    </div>
  )
}

WikiItem.propTypes = propTypes
WikiItem.defaultProps = defaultProps

export default WikiItem
