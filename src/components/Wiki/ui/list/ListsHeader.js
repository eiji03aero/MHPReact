import { Link } from 'react-router-dom'

import '../../stylesheets/ListsHeader.scss'

const ListsHeader = () =>
  <div className="ListsHeader">
    <Link to="/wiki/new" className="c-button--secondary">Create New</Link>
  </div>

export default ListsHeader
