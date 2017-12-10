import { Link } from 'react-router-dom'

const SidebarElem = ({ link, icon, title }) => {
  return (
    <Link to={link}>
      <div className="sidebarElem">
        <i className="mdi mdi-onDark mdi-36">{icon}</i>
        <p>{title}</p>
      </div>
    </Link>
  )
}

SidebarElem.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

SidebarElem.defaultProps = {
  link: "/",
  icon: "home",
  title: "not found"
}

export default SidebarElem
