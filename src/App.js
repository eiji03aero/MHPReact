import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ServiceSidebar from './shared/ServiceSidebar.js'
import WelcomePage from './welcome/WelcomePage.js'
import CommentLists from './comments/CommentLists.js'
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
            <ServiceSidebar />
          </div>
          <div className="serviceMain">
            <Route exact path="/" component={ WelcomePage } />
            <Route path="/comments" component={ CommentLists } />
          </div>
        </div>
      </Router>
    )
  }
}

