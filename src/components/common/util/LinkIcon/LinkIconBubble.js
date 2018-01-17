import FadeInOut from '../FadeInOut'

const propTypes = {
  title: PropTypes.string,
  show: PropTypes.bool
}

const LinkIconBubble = ({ title, show }) => {
  return (
    <FadeInOut in={ show }>
      <div className="icon-bubble-container">
        <div className="icon-bubble-title">
          <span>{ title }</span>
        </div>
      </div>
    </FadeInOut>
  )
}

LinkIconBubble.propTypes = propTypes

export default LinkIconBubble
