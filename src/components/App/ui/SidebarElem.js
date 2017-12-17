import { Link } from 'react-router-dom'

const propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

const defaultProps = {
  link: "/",
  icon: "alert-circle-outline",
  title: "not found"
}

const SidebarElem = ({ link, icon, title }) => {
  return (
    <Link to={link}>
      <div className="sidebarElem">
        <i className="mdi mdi-onDark mdi-36">{icon}</i>
        <p className="u-fs--12">{title}</p>
      </div>
    </Link>
  )
}

SidebarElem.propTypes = propTypes
SidebarElem.defaultProps = defaultProps

export default SidebarElem
