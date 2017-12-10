const WikiItem = ({ name, body }) =>
  <div className="wikiItem _flx">
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

WikiItem.propTypes = {
  name: PropTypes.string,
  body: PropTypes.string
}

WikiItem.defaultProps = {
  name: 'default name',
  body: 'default body'
}

export default WikiItem
