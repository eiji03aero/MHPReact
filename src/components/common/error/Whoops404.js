import { Link } from 'react-router-dom'

import './Whoops404.scss'

const propTypes = {
  location: PropTypes.object
}

const Whoops404 = ({ location }) =>
  <div className="whoops-404">
    <div className="whoops-404-container">
      <div className="whoops-404-header">
        <span className="u-fs--36">Whoops, it's your friendly neighborhood 404!!</span>
      </div>
      <div className="whoops-404-body">
        <span className="u-fs--24">Could not find resource at '{ location.pathname }'</span>
      </div>
    </div>
    <p>
      <Link to="/"> ← Back to home</Link>
    </p>
  </div>

Whoops404.propTypes = propTypes

export default Whoops404
