import { Route, Switch } from 'react-router-dom'

import WelcomePage from '../../WelcomePage/WelcomePage.js'
import CommentLists from '../../CommentLists/CommentLists.js'
import ImageMap from '../../ImageMap/ImageMap.js'
import Wiki from '../../Wiki/Wiki.js'
import ColorOrganizer from '../../ColorOrganizer/ColorOrganizer.js'
import Whoops404 from '../../common/error/Whoops404.js'

const ServiceContent = () =>
  <div className="serviceContent u-flex--1">
    <Switch>
      <Route exact path="/" component={ WelcomePage } />
      <Route path="/comments" component={ CommentLists } />
      <Route path="/imagemap" component={ ImageMap } />
      <Route path="/wiki" component={ Wiki } />
      <Route path="/color-organizer" component={ ColorOrganizer } />
      <Route component={ Whoops404 } />
    </Switch>
  </div>

export default ServiceContent
