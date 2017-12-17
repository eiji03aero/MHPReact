const propTypes = {
  title: PropTypes.string,
  show: PropTypes.bool
}

const LinkIconBubble = ({ title, show }) => {
  return show ?
    <div className="icon-bubble-container">
      <div className="icon-bubble-title">
        <span>{ title }</span>
      </div>
    </div> :
    null
}

LinkIconBubble.propTypes = propTypes

export default LinkIconBubble
