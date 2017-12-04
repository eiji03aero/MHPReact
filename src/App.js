import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, browserHistory } from 'react-router-dom'
import request from 'superagent'
import ServiceSidebar from './shared/ServiceSidebar.js'
import ServiceHeader from './shared/ServiceHeader.js'
import WelcomePage from './components/welcome/WelcomePage.js'
import CommentLists from './components/comments/CommentLists.js'
import ImageMap from './components/imageMap/ImageMap.js'
import Wiki from './components/wiki/Wiki.js'
import ColorOrganizer from './components/colorOrganizer/colorOrganizer.js'

import './basicStyles.scss'
import './admin/utility.scss'
import './admin/font-size.scss'
import './admin/mdi.scss'
import './App.scss'

// Testing========== 
import storeFactory from './redux/stores/store.js'
import { addColor } from './redux/actions/ColorOrganizer/action.js'
window.storeFactory = storeFactory
window.addColor = addColor
// ==========

export default class App extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <Router history={ browserHistory }>
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
              <Route path="/color-organizer" component={ ColorOrganizer } />
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

