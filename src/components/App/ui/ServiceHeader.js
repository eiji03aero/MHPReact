import { Link } from 'react-router-dom'
import LinkIcon from '../../common/util/LinkIcon/LinkIcon.js'

import '../stylesheets/ServiceHeader.scss'

const ServiceHeader = () =>
  <div className="ServiceHeader u-flex--fs">
    <span className="u-fs--24">MHPReact</span>
    <div className="u-optional-right">
      <LinkIcon title="Home" icon="home" to="/" />
    </div>
  </div>

export default ServiceHeader
