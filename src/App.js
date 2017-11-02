import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ServiceSidebar from './shared/ServiceSidebar.js'
import ServiceHeader from './shared/ServiceHeader.js'
import WelcomePage from './components/welcome/WelcomePage.js'
import CommentLists from './components/comments/CommentLists.js'
import ImageMap from './components/imageMap/ImageMap.js'
import Wiki from './components/wiki/Wiki.js'

import './basicStyles.scss'
import './admin/utility.scss'
import './admin/mdi.scss'
import './App.scss'

import request from 'superagent'

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
          <div className="serviceMain u-flex--col u-flex--1">
            <div className="serviceHeader">
              <ServiceHeader />
            </div>
            <div className="serviceContent u-flex--1">
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

