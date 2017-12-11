import { Link } from 'react-router-dom'

import './Whoops404.scss'

const Whoops404 = ({ location }) =>
  <div className="whoops-404">
    <div className="whoops-404-container">
      <div className="whoops-404-header">
        <h2>Whoops, it's your friendly neighborhood 404</h2>
      </div>
      <div className="whoops-404-body">
        <h4>Cannot find resource at '{ location.pathname }'</h4>
      </div>
    </div>
    <p>
      <Link to="/">Back to home</Link>
    </p>
  </div>

Whoops404.propTypes = {
  location: PropTypes.object.isRequired
}

export default Whoops404
