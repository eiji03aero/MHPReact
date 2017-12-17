import { Route, Switch } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'

import WelcomePage from '../../WelcomePage/WelcomePage.js'
import CommentLists from '../../CommentLists/CommentLists.js'
import ImageMap from '../../ImageMap/ImageMap.js'
import Wiki from '../../Wikidesu/Wiki.js'
import ColorOrganizer from '../../ColorOrganizerdesu/ColorOrganizer.js'
import Whoops404 from '../../common/error/Whoops404.js'
import ServiceRedirect from './ServiceRedirect.js'

import '../stylesheets/ServiceContent.scss'

const enterStyle = {
  opacity: 0,
  position: 20
}
const activeStyle = {
  opacity: 1,
  position: 0
}
const leaveStyle = {
  opacity: 0,
  position: -20
}

function mapStyles (style) {
  return {
    opacity: style.opacity,
    transform: `translateY(${style.position}px)`
  }
}

const ServiceContent = () =>
  <div className="serviceContent u-flex--1">
    <ServiceRedirect />
    <AnimatedSwitch
      atEnter={enterStyle}
      atActive={activeStyle}
      atLeave={leaveStyle}
      mapStyles={mapStyles}
      className="switch-wrapper" >

      <Route exact path="/" component={ WelcomePage } />
      <Route path="/comments" component={ CommentLists } />
      <Route path="/imagemap" component={ ImageMap } />
      <Route path="/wiki" component={ Wiki } />
      <Route path="/color-organizer" component={ ColorOrganizer } />
      <Route component={ Whoops404 } />

    </AnimatedSwitch>
  </div>

export default ServiceContent
