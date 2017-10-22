import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ServiceSidebar from './shared/ServiceSidebar.js'
import WelcomePage from './welcome/WelcomePage.js'
import CommentLists from './comments/CommentLists.js'
import ImageMap from './imageMap/ImageMap.js'
import Wiki from './wiki/Wiki.js'

import './basicStyles.scss'
import './App.scss'

export default class App extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <Router>
        <div className="serviceField">
          <div className="serviceLeft">
            <ServiceSidebar />
          </div>
          <div className="serviceMain">
            <Route exact path="/" component={ WelcomePage } />
            <Route path="/comments" component={ CommentLists } />
            <Route path="/imagemap" component={ ImageMap } />
            <Route path="/wiki" component={ Wiki } />
          </div>
        </div>
      </Router>
    )
  }
}

