import { Route, Switch } from 'react-router-dom'

import ServiceSidebar from './ui/ServiceSidebar.js'
import ServiceHeader from './ui/ServiceHeader.js'
import ServiceContent from './ui/ServiceContent.js'

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
    </div>
  </div>

export default App
