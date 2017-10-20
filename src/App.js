import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ServiceSidebar from './shared/ServiceSidebar.js'
import WelcomePage from './welcome/WelcomePage.js'
import CommentLists from './comments/CommentLists.js'
import ImageMap from './imageMap/ImageMap.js'

import './App.scss'

export default class App extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <Router>
        <div className="serviceField">
          <div className="serviceSidebar">
            <p><Link to="/">Welcome</Link></p>
            <p><Link to="/comments">Comments</Link></p>
            <p><Link to="/imagemap">image map</Link></p>
          </div>
          <div className="serviceMain">
            <Route exact path="/" component={ WelcomePage } />
            <Route path="/comments" component={ CommentLists } />
            <Route path="/imagemap" component={ ImageMap } />
          </div>
        </div>
      </Router>
    )
  }
}

