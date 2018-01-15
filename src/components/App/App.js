import ServiceSidebar from './ui/ServiceSidebar.js'
import ServiceHeader from './ui/ServiceHeader.js'
import ServiceContent from './ui/ServiceContent.js'
import ServicePopup from './ui/ServicePopup.js'
import LoadingSpinner from '../common/util/LoadingSpinner/LoadingSpinner.js'
import DevTools from './ui/DevTools.js'

import './stylesheets/basicStyles.scss'
import './stylesheets/utils/utils.scss'
import './stylesheets/App.scss'

const App = () =>
  <div className="serviceField u-flex">
    <div className="serviceLeft">
      <ServiceSidebar />
    </div>
    <div className="serviceMain u-flex--col u-flex--1">
      <ServiceHeader />
      <ServiceContent />
      <LoadingSpinner />
      <DevTools />
    </div>
    <ServicePopup />
  </div>

export default App
