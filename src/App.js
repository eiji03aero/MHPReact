import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ServiceSidebar from './shared/ServiceSidebar.js'
import ServiceHeader from './shared/ServiceHeader.js'
import WelcomePage from './welcome/WelcomePage.js'
import CommentLists from './comments/CommentLists.js'
import ImageMap from './imageMap/ImageMap.js'
import Wiki from './wiki/Wiki.js'

import './basicStyles.scss'
import './admin/utility.scss'
import './admin/mdi.scss'
import './App.scss'

export default class App extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <Router>
        <div className="serviceField _flx">
          <div className="serviceLeft">
            <ServiceSidebar />
          </div>
          <div className="serviceMain">
            <div className="serviceHeader">
              <ServiceHeader />
            </div>
            <div className="serviceContent">
              <Route exact path="/" component={ WelcomePage } />
              <Route path="/comments" component={ CommentLists } />
              <Route path="/imagemap" component={ ImageMap } />
              <Route path="/wiki" component={ Wiki } />
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

