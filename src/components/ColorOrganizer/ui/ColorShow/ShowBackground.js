import '../../stylesheets/ShowBackground.scss'

const propTypes = {
  color: PropTypes.object
}

const ShowBackground = ({ color }) =>
  <div className="ShowBackground" style={{ backgroundColor: color }} />

export default ShowBackground
